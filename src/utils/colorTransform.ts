class HSB {
  h: number;
  s: number;
  b: number;

  constructor(h: number, s: number, b: number) {
    this.h = h;
    this.s = s;
    this.b = b;
  }

  toString() {
    return `H${Math.round(this.h)} S${Math.round(this.s * 100)} B${Math.round(
      this.b * 100
    )}`;
  }
}

class CMYK {
  c: number;
  m: number;
  y: number;
  k: number;
  constructor(c: number, m: number, y: number, k: number) {
    this.c = c;
    this.m = m;
    this.y = y;
    this.k = k;
  }

  toString() {
    return `C${Math.round(this.c * 100)} M${Math.round(
      this.m * 100
    )} Y${Math.round(this.y * 100)} K${Math.round(this.k * 100)}`;
  }
}

class RGB {
  r: number;
  g: number;
  b: number;
  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  toString() {
    return `R${this.r} G${this.g} B${this.b}`;
  }

  toCMYK() {
    const B = this.b / 255;
    const R = this.r / 255;
    const G = this.g / 255;
    const k = 1 - Math.max(R, G, B);
    return new CMYK(
      (1 - R - k) / (1 - k),
      (1 - G - k) / (1 - k),
      (1 - B - k) / (1 - k),
      k
    );
  }

  toHSB() {
    const B = this.b / 255;
    const R = this.r / 255;
    const G = this.g / 255;
    const maxValue = Math.max(R, G, B);
    const minValue = Math.min(R, G, B);
    const delta = maxValue - minValue;
    let h;
    if (maxValue === R) {
      h = 60 * (((G - B) / delta) % 6);
    } else if (maxValue === B) {
      h = 60 * ((R - G) / delta + 4);
    } else if (maxValue === G) {
      h = 60 * ((B - R) / delta + 2);
    } else {
      h = 0;
    }

    if (h < 0) {
      h += 360;
    }

    let s;
    if (maxValue === 0) {
      s = 0;
    } else {
      s = delta / maxValue;
    }
    return new HSB(h, s, maxValue);
  }

  /**
   *
   * @param s example: #FFFFE5 or FFFFE5
   */
  static from(s: string) {
    if (s.startsWith("#")) {
      s = s.slice(1);
    }

    if (s.length != 6) {
      throw new Error(
        "can not convert it to rgb, it length too short, your need input like #FFFFE5 or FFFFE5"
      );
    }

    const R = Number.parseInt(s.slice(0, 2), 16);
    const G = Number.parseInt(s.slice(2, 4), 16);
    const B = Number.parseInt(s.slice(4), 16);

    if (R < 0 || R > 255 || G < 0 || G > 255 || B < 0 || B > 255) {
      throw new Error(
        "can not convert it to rgb, value is less than 0 or lager than 255,your need input like #FFFFE5 or FFFFE5"
      );
    }

    return new RGB(R, G, B);
  }
}

export { RGB };
