# composed-handler-mismatch

## How to reproduce

```
npm i
npm run build --workspace=app
npm run build --workspace=ssg
```

- Expected: `projects/ssg/static/index.html` is generated.
- Actual: `projects/ssg/static/index.html` is not generated.
