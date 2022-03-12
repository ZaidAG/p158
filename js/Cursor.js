AFRAME.registerComponent("cursor-touch",{
    schema:{
        selectedItemId: { 
            default: "", 
            type: "string" 
        },
    },
    init: function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
      },
      handlePlacesListState: function () {
        const id = this.el.getAttribute("id");
        const posterId = ["spiderman", "batman", "ironman", "superman"];
        if (posterId.includes(id)) {
          const placeContainer = document.querySelector("#places-container");
          placeContainer.setAttribute("cursor-touch", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", {
            color: "#yellow",
            opacity: 1,
          });
        }
      },
      handleMouseEnterEvents: function () {
        //Cursor 'mouseenter' Events
        this.el.addEventListener("mouseenter", () => {
          this.handlePlacesListState();
        });
      },
      handleMouseLeaveEvents: function () {
        //Cursor 'mouseleave' Events
        this.el.addEventListener("mouseleave", () => {
          const { selectedItemId } = this.data;
          if (selectedItemId) {
            const el = document.querySelector(`#${selectedItemId}`);
            const id = el.getAttribute("id");
            if (id == selectedItemId) {
              el.setAttribute("material", {
                color: "yellow",
                opacity: 1,
              });
            }
          }
        });
      },
})