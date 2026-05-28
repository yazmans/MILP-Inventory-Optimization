// figma: 92:6794 Input with placeholder (4 variants)
const __variants = {
  "property1=Input xs": { height: 53 },
  "property1=Input sm": { height: 60 },
  "property1=Input Default": { height: 63 },
};
const __vkey = (p) => "property1=" + p.property1;

export function InputWithPlaceholder(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "Input lg" };
  const __vs = __variants[__vkey(props)] ?? {};
  return (
    <div className={props.className} style={{
      width: 303,
      height: 65,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      position: "relative",
      ...__vs, ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 303,
        height: 21,
        fontFamily: "Archivo",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "24px",
        color: "var(--grey-grey-900)",
      }}>Label</span>
      <div style={{
        position: "absolute",
        left: 0,
        top: 25,
        width: 303,
        height: 40,
        borderRadius: 5,
        backgroundColor: "var(--brand-white)",
        border: "1px solid var(--transparent-secondry-transparent)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "8px 16px 8px 16px",
        alignItems: "center",
      }} />
    </div>
  );
}
export default InputWithPlaceholder;
