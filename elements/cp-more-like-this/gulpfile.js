const path = require("path");
const fs = require("fs");

const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const stripCssComments = require("strip-css-comments");
const trim = require("trim");
const sass = require("node-sass");

gulp.task("compile", () => {
  return gulp
    .src("./cp-more-like-this.js")
    .pipe(
      replace(
        /^(import .*?)(['"]\.\.\/(?!\.\.\/).*)(\.js['"];)$/gm,
        "$1$2.compiled$3"
      )
    )
    .pipe(babel())
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".compiled"
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("watch", () => {
  return gulp.watch("./src/*", gulp.series("merge", "compile"));
});

gulp.task("merge", () => {
  return gulp
    .src("./src/cp-more-like-this.js")
    .pipe(
      replace(/(template\.innerHTML = `)(`;)/, (match, p1, p2) => {
        const html = fs
          .readFileSync("./src/cp-more-like-this.html")
          .toString()
          .trim();

        const cssResult = sass.renderSync({
          file: "./src/cp-more-like-this.scss"
        }).css;

        return `${p1}
<style>${stripCssComments(cssResult).trim()}</style>
${html}
${p2}`;
      })
    )
    .pipe(
      replace(/extends\s+Rhelement\s+{/, (classStatement, line, jsFile) => {
        // extract the templateUrl and styleUrl with regex.  Would prefer to do
        // this by require'ing rh-card.js and asking it directly, but without
        // node.js support for ES modules, we're stuck with this.
        const oneLineFile = jsFile.split("\n").join(" ");
        const [
          ,
          templateUrl
        ] = /get\s+templateUrl\([^)]*\)\s*{\s*return\s+"([^"]+)"/.exec(
          oneLineFile
        );
        const [
          ,
          styleUrl
        ] = /get\s+styleUrl\([^)]*\)\s*{\s*return\s+"([^"]+)"/.exec(
          oneLineFile
        );

        const html = fs
          .readFileSync(path.join("./src", templateUrl))
          .toString()
          .trim();

        const cssResult = sass.renderSync({
          file: path.join("./src", styleUrl)
        }).css;

        return `${classStatement}
  html(data) {
    return \`
<style>
${stripCssComments(cssResult).trim()}
</style>

${html}\`;
  }
`;

        // return `<style>${stripCssComments(cssResult).trim()}</style>
        // ${html}`;
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("default", gulp.series("merge", "compile"));

gulp.task("dev", gulp.series("merge", "compile", "watch"));
