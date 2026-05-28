// figma: 7:24736 Avatar Circle (11 variants)
const __variants = {
  "property1=Avatar Circle 180": { width: 180, height: 180 },
  "property1=Avatar Circle 96": { width: 96, height: 96 },
  "property1=Avatar Circle 72": { width: 72, height: 72 },
  "property1=Avatar Circle 48": { width: 48, height: 48 },
  "property1=Avatar Circle 32": { width: 34, height: 34 },
  "property1=Avatar Circle 24": { width: 24, height: 24 },
  "property1=Avatar 16": { width: 16, height: 16 },
  "property1=Avatar 14": { width: 14, height: 14 },
  "property1=Avatar 12": { width: 12, height: 12 },
  "property1=Avatar 10": { width: 10, height: 10 },
};
const __vkey = (p) => "property1=" + p.property1;

export function AvatarCircle(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "Avatar Circle 120" };
  const __vs = __variants[__vkey(props)] ?? {};
  return (
    <div className={props.className} style={{
      width: 120,
      height: 120,
      position: "relative",
      ...__vs, ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 120,
        height: 120,
        borderRadius: 135,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 120,
        height: 120,
      }} />
    </div>
  );
}
export default AvatarCircle;
