(() => {
    const topEl = document.querySelector(".creature");

    // define a  waypoint and run some animation
    var waypoint = new Waypoint({
        element: document.querySelector("#creature").querySelector('.symbols'),
        handler: function(direction) {
            console.log("scrolled to element!", this.element);
            runAnimation(this.element, ["lGlass", "cGlass", "rGlass"]);
        },
        offset: 200
    });

    function runAnimation(parent, elements) {
        //debugger;
        console.log(parent, elements);

        // get the svg ref from the parent
        innerSVG = parent.contentDocument; // svg inside of the object tag

        let animProps = {};

        switch(parent.id) {
            case "bottle":
            animProps = {scaleX: 1.5, scaleY: 1.5, rotation: 360, transformOrigin: "50% 50%"};
            break;

            case "glasses":
            animProps = { scaleX: 1.5, scaleY: 1.5 };
            break;

            case "barrels":
            // run some other animation here
            break;

            default:
            // do nothing
            break;
        }

        // run an animation with Greensock
        elements.forEach(el => {
            let target = innerSVG.querySelector(`#${el}`);
            TweenMax.to(target, 0.6, animProps);
        });

        // get the data that goes with this SVG => this way we can pass in a DB call either on an interaction (mouseover, click etc) or using waypoint
        getData(parent.id); // the ID should match the data in the "label" column in the DB
    }

    function getData(target) {
        // run a fetch call to the DB and get the data that goes with this graphic
        let url = `./includes/connect.php?label=${target}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            parseData(data[0]);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    function parseData(label) {
        // recieve, parse, update page
        const { headline, copy } = label;

        //debugger;
        // get the elements and update them
        // document.querySelector(#....) etc... refer to the car example from Week 8

    }

    // event handling
    topEl.addEventListener("mouseover", function() {
        runAnimation(this.querySelector('.symbols'), ["lStar", "rStar"]);
    });
})();