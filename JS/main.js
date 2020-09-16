const { default: gsap } = require("gsap/gsap-core");
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

gsap.to(".logo", {duration: 2, x: 300});