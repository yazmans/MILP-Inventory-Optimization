// figma: 137:42465 Input Multi select (2 variants)
const __variants = {

};
const __vkey = (p) => "property1=" + p.property1;

export function InputMultiSelect(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "Default" };
  const __vs = __variants[__vkey(props)] ?? {};
  return (
    <div className={props.className} style={{
      width: 303,
      height: 85,
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
        height: 38,
        borderRadius: 5,
        backgroundColor: "var(--brand-white)",
        border: "1px solid var(--transparent-secondry-transparent)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "6px 12px 6px 12px",
        alignItems: "center",
      }} />
      <span style={{
        position: "absolute",
        left: 0,
        top: 67,
        width: 176,
        height: 18,
        fontFamily: "Nunito",
        fontWeight: 500,
        fontSize: 13,
        lineHeight: "100%",
        color: "var(--grey-grey-600)",
      }}>Enter value separated by comma</span>
    </div>
  );
}
export default InputMultiSelect;
