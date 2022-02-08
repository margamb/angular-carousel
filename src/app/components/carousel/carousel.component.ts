import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit {
  idx: number = 0;
  widthCarousel: number = 0;

  imagesCarouselOriginal = [
    {
      url: "../../assets/img/bigTroubleInLittleChina.png",
      href: "https://margamartinez.com/image/642125804948586496",
    },
    {
      url: "../../assets/img/brainDead.png",
      href: "https://margamartinez.com/image/162701795254",
    },
    {
      url: "../../assets/img/colossal.png",
      href: "https://margamartinez.com/image/129273745714",
    },
    {
      url: "../../assets/img/escapeFromNY.png",
      href: "https://margamartinez.com/image/125747930759",
    },
    {
      url: "../../assets/img/theFlash.png",
      href: "https://margamartinez.com/image/125747930759",
    },
    {
      url: "../../assets/img/theIrihsman.png",
      href: "https://margamartinez.com/image/125747930759",
    },
    {
      url: "../../assets/img/theThing.png",
      href: "https://margamartinez.com/image/125747930759",
    },
  ];

  imagesCarousel = [
    ...this.imagesCarouselOriginal,
    ...this.imagesCarouselOriginal,
  ];

  changeImage() {
    // Como hemos duplicado la array original, la longitud la tenemos
    // que dividir por dos
    const len = this.imagesCarousel.length / 2 - 1;

    if (this.idx === len) {
      this.idx = 0;
    } else if (this.idx < 0) {
      this.idx = len;
    } else if (this.idx > len) {
      this.idx = 0;
    }

    this.widthCarousel = -this.idx * 210;
    console.log(this.imagesCarousel.length === 6);
  }

  next() {
    this.idx++;
    this.changeImage();
  }

  prev() {
    this.idx--;
    this.changeImage();
  }

  constructor() {}

  ngOnInit(): void {}
}
