//    const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World! from ReactJS");
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     console.log(heading); // return object
//     root.render(heading);

//Create Parent child structure using React.createElement

/**
 * <div id="parent">
 * <div id="child1">
 * <h1> I'm h1 tag </h1>
 * <h2> I'm h2 tag </h2>
 * </div>
 * <div id="child2">
 * <h1> I'm h1 tag </h1>
 * <h2> I'm h2 tag </h2>
 * </div>
 * </div>
 *
 * 
 */

const parent = React.createElement("div", {id:"parent"},
                    [React.createElement("div", {id:"child1"},
                        [React.createElement("h1", {}, "I'm h1 tag"),
                        React.createElement("h2", {}, "I'm h2 tag")]
                    ),
                React.createElement("div", {id:"child2"},
                        [React.createElement("h1", {}, "I'm h1 tag"),
                        React.createElement("h2", {}, "I'm h2 tag")]
                    ),
                  React.createElement("div", {id:"child3"},
                        [React.createElement("h1", {}, "I'm h1 tag"),
                        React.createElement("h2", {}, "I'm h2 tag")]
                    )]
                );

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent); // return object
root.render(parent);