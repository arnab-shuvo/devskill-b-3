# Ecommerce
Easily create fully-static ecommerce sites powered by [Hanzo](https://hanzo.io).

## Install
```bash
npm install -g ecommerce
```

## Usage
```bash
ecommerce new my-new-site
```

## Project layout
- Project related files in root:
    - README
    - Gitignore
    - Build related files
- Assets in `src/`
- Entire project builds into `dist/`
- Static content copied into `dist/` (and optionally optimized along the way)
- Spritemap generated and copied to `dist/img/sprite.png`
- Application CSS (necessary across all pages) is bundled into `dist/css/app.css`
- Page-specific CSS bundled as necessary into `dist/css/<page>.css`
- Vendor (third-party) + application JS (necessary across all pages) bundled into `dist/js/app.js`
- Page-specific JS bundled as necessary into `dist/js/<page>.js`
- HTML is generated from remote content + templates

### Fonts, Images copied
```
src/font/*                     ---> dist/font/*
src/img/*                      ---> dist/img/*
```

### Spritemap generated
```
src/img/sprite/1.png           ---> dist/img/sprite.png
src/img/sprite/2.png          /---> .tmp/sprite.css
src/img/sprite/3.png         /
```

### App CSS bundled
```
src/css/index.styl             ---> dist/css/app.css
src/css/a.styl                /
src/css/b.styl               /
node_modules/dep/dep.styl   /
.tmp/sprite.css            /
```

### Page-specific CSS bundled
```
src/css/page/index.styl        ---> dist/css/<page>.css
src/css/page/a.styl           /
src/css/page/b.styl          /
```

### Vendor JS concatenated
```
src/js/vendor/jquery.js        ---> .tmp/vendor.js
src/js/vendor/a.js            /
src/js/vendor/b.js           /
src/js/vendor/c.js          /
src/js/vendor/d.js         /
```

### App JS bundled
```
src/js/index.coffee            ---> .tmp/bundle.js
src/js/a.coffee               /
src/js/b.coffee              /
src/js/c.coffee             /
node_modules/dep/dep.js    /
```

### Concat vendor + bundled JS
```
.tmp/vendor.js                 ---> dist/js/app.js
.tmp/bundle.js                /
```

### Page-specific JS bundled
```
src/js/page/index.coffee       ---> dist/js/<page>.js
src/js/page/a.coffee          /
src/js/page/b.coffee         /
src/js/page/c.coffee        /
node_modules/dep2/dep2.js  /
```

### HTML generated from templates + includes
```
src/index.jade                 ---> dist/index.html
src/_header.jade              /
src/_footer.jade             /

src/page.jade                  ---> dist/page.html
src/_header.jade              /
src/_footer.jade             /
```

### HTML generated from templates + remote content
```
src/post.jade                  ---> dist/post/slug.html
src/_header.jade              /
src/_footer.jade             /
api.hanzo.io/content/:slug  /

src/product.jade               ---> dist/product/slug.html
src/_header.jade              /
src/_footer.jade             /
api.hanzo.io/product/:slug  /
```
