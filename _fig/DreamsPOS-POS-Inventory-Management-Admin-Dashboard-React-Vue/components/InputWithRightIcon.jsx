// figma: 92:6838 Input with right icon (4 variants)
const __variants = {
  "property1=Input Select xs": { height: 50 },
  "property1=Input Select sm": { height: 54 },
  "property1=Input Select Default": { height: 63 },
};
const __vkey = (p) => "property1=" + p.property1;

export function InputWithRightIcon(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "Input Select lg" };
  const __vs = __variants[__vkey(props)] ?? {};
  return (
    <div className={props.className} style={{
      width: 303,
      height: 62,
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
        height: 37,
        borderRadius: 5,
        backgroundColor: "var(--brand-white)",
        border: "1px solid var(--transparent-secondry-transparent)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 16px 8px 16px",
        alignItems: "center",
      }}>
        <span style={{
          position: "absolute",
          left: 16,
          top: 8,
          width: 249,
          height: 21,
          fontFamily: "Archivo",
          fontSize: 14,
          lineHeight: "24px",
          color: "var(--grey-grey-300)",
        }}>Placeholder</span>
        <div style={{
            position: "absolute",
            left: 273,
            top: 11.5,
            width: 14,
            height: 14,
          }} data-external={"user"} />
      </div>
    </div>
  );
}
export default InputWithRightIcon;
