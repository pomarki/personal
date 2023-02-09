const cV = {
  z: "0px",
  s: "65px",
  m: "132px",
  e: "197px",
  l: "394px",
  ed: "0deg",
  rd: "-90deg",
};

const morfingConst = [
  [
    { id: 0, width: cV.l, top: cV.z, left: cV.z, rotate: cV.ed },
    { id: 1, width: cV.e, top: cV.e, left: cV.e, rotate: cV.ed },
    { id: 2, width: cV.s, top: cV.e, left: cV.z, rotate: cV.rd },
    { id: 3, width: cV.m, top: cV.e, left: cV.s, rotate: cV.rd },
  ],
  [
    { id: 0, width: cV.e, top: cV.e, left: cV.z, rotate: cV.ed },
    { id: 1, width: cV.l, top: cV.z, left: cV.z, rotate: cV.ed },
    { id: 2, width: cV.m, top: cV.e, left: cV.s, rotate: cV.rd },
    { id: 3, width: cV.e, top: cV.e, left: cV.e, rotate: cV.ed },
  ],
  [
    { id: 0, width: cV.s, top: cV.z, left: cV.z, rotate: cV.rd },
    { id: 1, width: cV.m, top: cV.z, left: cV.s, rotate: cV.rd },
    { id: 2, width: cV.l, top: cV.e, left: cV.z, rotate: cV.ed },
    { id: 3, width: cV.e, top: cV.z, left: cV.e, rotate: cV.ed },
  ],
  [
    { id: 0, width: cV.m, top: cV.z, left: cV.e, rotate: cV.rd },
    { id: 1, width: cV.s, top: cV.z, left: cV.e, rotate: cV.rd },
    { id: 2, width: cV.e, top: cV.z, left: cV.z, rotate: cV.ed },
    { id: 3, width: cV.l, top: cV.e, left: cV.z, rotate: cV.ed },
  ],
];

export { morfingConst };
