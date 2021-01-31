function App() {
  return e("div", {
    className: "App"
  },
    e("header", {
      className: "App-header"
    },
      e("img", {
        src: "./src/logo.svg",
        className: "App-logo",
        alt: "logo"
      }),
      e("p", null,
        "Edit ", e("code", null, "src/app.mjs"), " and save to reload."),
      e("a", {
        className: "App-link",
        href: "https://reactjs.org/docs/react-without-jsx.html",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Learn React Without JSX")
    )
  );
}

export default App;