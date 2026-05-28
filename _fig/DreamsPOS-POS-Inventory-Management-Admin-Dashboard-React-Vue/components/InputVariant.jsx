// figma: 150:63784 Input Variant (3 variants)
const __variants = {
  "property1=With New Button": { height: 66 },
};
const __vkey = (p) => "property1=" + p.property1;

export function InputVariant(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "With Link" };
  const __vs = __variants[__vkey(props)] ?? {};
  return (
    <div className={props.className} style={{
      width: 303,
      height: 63,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      position: "relative",
      ...__vs, ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 303,
        height: 21,
        display: "flex",
        flexDirection: "row",
        gap: 4,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 221,
          height: 21,
          fontFamily: "Nunito Sans",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "24px",
          color: "var(--grey-grey-900)",
        }}>Label</span>
        <div style={{
          position: "absolute",
          left: 225,
          top: 0,
          width: 78,
          height: 21,
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 3.5,
              width: 14,
              height: 14,
            }} data-external={"circle-plus"} />
          <span style={{
            position: "absolute",
            left: 18,
            top: 0,
            width: 60,
            height: 21,
            fontFamily: "Nunito",
            fontWeight: 700,
            fontSize: 14,
            lineHeight: "18px",
            color: "var(--brand-primary)",
          }}>Add New</span>
        </div>
      </div>
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
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 6,
          width: 257,
          height: 26,
          fontFamily: "Nunito Sans",
          fontSize: 14,
          lineHeight: "24px",
          color: "var(--grey-grey-900)",
        }}>Select</span>
        <div style={{
            position: "absolute",
            left: 277,
            top: 12,
            width: 14,
            height: 14,
          }} data-external={"chevron-down"} />
      </div>
    </div>
  );
}
export default InputVariant;
