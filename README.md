# test-antagosoft
Hello!! MVP itself, I probably didn’t quite understand, for me the most important thing was to make the rendering of elements optimized, the abstraction framework was not discussed, so I thought that virtual scroll would be suitable here. There was no opportunity to discuss MVP, so I did everything in a way that was clear to me.

For this test I used a custom virtual scroller. You can also change the height and width of the displayed elements. I also wanted to use a web worker to offload a large number of color update events, but that doesn't make much sense, but it can be done. Since the number of displayed elements on the page is less than 2000 (On my screen), unnecessary events occur, I didn’t optimize it, since mvp was ready, and I didn’t have time to deal with such optimization (i am sick now).

You can also change the height and width of the graphical objects themselves, but only in the code at the time of object initialization.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
