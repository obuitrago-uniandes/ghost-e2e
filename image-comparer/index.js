const { glob } = require("glob");
const fs = require("fs");
const path = require("path");
const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const ejs = require("ejs");

const { options } = config;
let datetime = new Date().toISOString().replace(/:/g, ".");

if (process.argv.length < 4) {
  console.log(
    "Debe ingresar la carpeta antes y después de la comparación, ej. node js [before-dir] [dest-dir]"
  );
}

const read_before_dir = process.argv[2];
const read_after_dir = process.argv[3];

async function processFile(before_dir, after_dir) {
  let response = {};
  const beforeFiles = glob.sync("**/screenshots/**/*.png", { cwd: before_dir });

  for (let i = 0; i < beforeFiles.length; i++) {
    const file = beforeFiles[i];
    const destTemp = path.join(
      `./reports/${datetime}`,
      file.replace("/screenshots", "")
    );
    if (!fs.existsSync(path.dirname(destTemp))) {
      fs.mkdirSync(path.dirname(destTemp), { recursive: true });
    }
    fs.copyFileSync(
      path.join(before_dir, file),
      destTemp.replace(
        path.extname(destTemp),
        `-before${path.extname(destTemp)}`
      )
    );
    fs.copyFileSync(
      path.join(after_dir, file),
      destTemp.replace(
        path.extname(destTemp),
        `-after${path.extname(destTemp)}`
      )
    );
    const data = await compareImages(
      fs.readFileSync(path.join(before_dir, file)),
      fs.readFileSync(path.join(after_dir, file)),
      options
    );

    fs.writeFileSync(
      destTemp.replace(
        path.extname(destTemp),
        `-result${path.extname(destTemp)}`
      ),
      data.getBuffer()
    );
    const feature = file.split("/")[0];
    const scenario = file.split("/")[2];
    const image = file.replace("screenshots/", "");
    if (!response[feature]) {
      response[feature] = {};
    }
    if (!response[feature][scenario]) {
      response[feature][scenario] = [];
    }
    response[feature][scenario].push({
      files: {
        before: image.replace(
          path.extname(image),
          `-before${path.extname(image)}`
        ),
        after: image.replace(
          path.extname(image),
          `-after${path.extname(image)}`
        ),
        result: image.replace(
          path.extname(image),
          `-result${path.extname(image)}`
        ),
      },
      data: JSON.stringify(
        {
          isSameDimensions: data.isSameDimensions,
          dimensionDifference: data.dimensionDifference,
          rawMisMatchPercentage: data.rawMisMatchPercentage,
          misMatchPercentage: data.misMatchPercentage,
          diffBounds: data.diffBounds,
          analysisTime: data.analysisTime,
        },
        null,
        2
      ),
    });
  }
  return response;
}

(async () => {
  const data = await processFile(read_before_dir, read_after_dir);
  ejs.renderFile("./report.html.ejs", { results: data }, function (err, str) {
    fs.writeFileSync(`./reports/${datetime}/report.html`, str);
    console.error(err);
    console.log(
      `Reporte generado exitosamente en ./reports/${datetime}/report.html`
    );
  });
})();
