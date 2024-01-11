// loading button animation
class LoadingAnimation {
  constructor(element, size = 20, thickness = 2, color = "white") {
    this.element = element;
    this.thickness = thickness;
    this.initialHeight = element.outerHeight();
    this.initialWidth = element.outerWidth();
    this.color = color;
    this.initialPadding = {
      top: element.css("padding-top"),
      bottom: element.css("padding-bottom"),
      left: element.css("padding-left"),
      right: element.css("padding-right")
    };
    this.initialDisplay = element.css("display");
    this.html = element.html();
    this.size = size;
  }

  start() {
    const loadingCircle = $("<div id=\"loading-circle\"></div>");
    this.element.css("height", this.initialHeight + "px");
    this.element.css("width", this.initialWidth + "px");

    if (this.element.css("display") === "inline-block") {
      this.element.css("display", "inline-flex");
    } else {
      this.element.css("display", "flex");
    }

    this.element.css("justify-content", "center");
    this.element.css("align-items", "center");
    this.element.css("padding", "0");
    loadingCircle.css("border-top", this.thickness + "px solid " + this.color);
    loadingCircle.css("border-bottom", this.thickness + "px solid " + this.color);
    loadingCircle.css("border-left", this.thickness + "px solid transparent");
    loadingCircle.css("border-right", this.thickness + "px solid transparent");
    this.element.empty();
    this.element.append(loadingCircle);

    if (this.size != 20) {
      this.element.children().css("height", this.size + "px");
      this.element.children().css("width", this.size + "px");
    }
  }

  end() {
    this.element.empty();
    this.element.html(this.html);
    this.element.css("padding-top", this.initialPadding.top);
    this.element.css("padding-bottom", this.initialPadding.bottom);
    this.element.css("padding-left", this.initialPadding.left);
    this.element.css("padding-right", this.initialPadding.right);
    this.element.css("display", this.initialDisplay);
  }
}