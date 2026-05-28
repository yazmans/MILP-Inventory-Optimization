// figma: 300:288647 Settings Sidebar (6 variants)
const __variants = {
  "property1=Website Settings": { height: 545 },
  "property1=App Settings": { height: 516 },
  "property1=Syste Settings": { height: 545 },
  "property1=Financial Settings": { height: 400 },
  "property1=Other Settings": { height: 371 },
};
const __vkey = (p) => "property1=" + p.property1;

export function SettingsSidebar(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "General Settings" };
  const __vs = __variants[__vkey(props)] ?? {};
  return (
    <div className={props.className} style={{
      width: 267,
      height: 429,
      borderRadius: 5,
      backgroundColor: "var(--brand-white)",
      border: "1px solid var(--transparent-secondry-transparent)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      ...__vs, ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 267,
        height: 429,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "16px 16px 16px 16px",
      }}>
        <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 235,
          height: 397,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 235,
            height: 27,
            fontFamily: "Nunito Sans",
            fontWeight: 700,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--brand-secondry)",
          }}>Settings</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 35,
            width: 235,
            height: 0,
            border: "1px solid var(--transparent-secondry-transparent)",
          }} />
          <div style={{
            position: "absolute",
            left: 0,
            top: 43,
            width: 235,
            height: 354,
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 235,
              height: 169,
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 235,
                height: 37,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "8px 8px 8px 8px",
                alignItems: "center",
              }}>
                <div style={{
                  position: "absolute",
                  left: 8,
                  top: 8,
                  width: 193,
                  height: 21,
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}>
                  <div style={{
                      position: "absolute",
                      left: 0,
                      top: 2.5,
                      width: 16,
                      height: 16,
                    }} data-external={"settings"} />
                  <span style={{
                    position: "absolute",
                    left: 26,
                    top: 0,
                    width: 106,
                    height: 21,
                    fontFamily: "Nunito Sans",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "var(--grey-grey-900)",
                  }}>General Settings</span>
                </div>
                <div style={{
                  position: "absolute",
                  left: 211,
                  top: 10.5,
                  width: 16,
                  height: 16,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: "var(--light-light-900)",
                  }} />
                  <div style={{
                      position: "absolute",
                      left: 2,
                      top: 2,
                      width: 12,
                      height: 12,
                    }} data-external={"chevron-up"} />
                </div>
              </div>
              <div style={{
                position: "absolute",
                left: 0,
                top: 37,
                width: 235,
                height: 132,
                display: "flex",
                flexDirection: "column",
                padding: "8px 32px 8px 32px",
              }}>
                <div style={{
                  position: "absolute",
                  left: 32,
                  top: 8,
                  width: 171,
                  height: 29,
                  borderRadius: 5,
                  backgroundColor: "var(--primary-shades-primary-100)",
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  padding: "4px 8px 4px 8px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}>
                  <span style={{
                    position: "absolute",
                    left: 8,
                    top: 4,
                    width: 138,
                    height: 21,
                    fontFamily: "Nunito Sans",
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "24px",
                    color: "var(--brand-primary)",
                  }}>Profile</span>
                  <div style={{
                    position: "absolute",
                    left: 156,
                    top: 11,
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "var(--brand-primary)",
                  }} />
                </div>
                <div style={{
                  position: "absolute",
                  left: 32,
                  top: 37,
                  width: 171,
                  height: 29,
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  padding: "4px 8px 4px 8px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}>
                  <span style={{
                    position: "absolute",
                    left: 8,
                    top: 4,
                    width: 155,
                    height: 21,
                    fontFamily: "Nunito Sans",
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "24px",
                    color: "var(--grey-grey-600)",
                  }}>Security</span>
                </div>
                <div style={{
                  position: "absolute",
                  left: 32,
                  top: 66,
                  width: 171,
                  height: 29,
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  padding: "4px 8px 4px 8px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}>
                  <span style={{
                    position: "absolute",
                    left: 8,
                    top: 4,
                    width: 155,
                    height: 21,
                    fontFamily: "Nunito Sans",
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "24px",
                    color: "var(--grey-grey-600)",
                  }}>Notifications</span>
                </div>
                <div style={{
                  position: "absolute",
                  left: 32,
                  top: 95,
                  width: 171,
                  height: 29,
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  padding: "4px 8px 4px 8px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}>
                  <span style={{
                    position: "absolute",
                    left: 8,
                    top: 4,
                    width: 155,
                    height: 21,
                    fontFamily: "Nunito Sans",
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "24px",
                    color: "var(--grey-grey-600)",
                  }}>Connected Apps</span>
                </div>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 169,
              width: 235,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              padding: "8px 8px 8px 8px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 8,
                top: 8,
                width: 203,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"world"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 109,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Website Settings</span>
              </div>
              <div style={{
                position: "absolute",
                left: 211,
                top: 10.5,
                width: 16,
                height: 16,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "var(--light-light-900)",
                }} />
                <div style={{
                    position: "absolute",
                    left: 2,
                    top: 2,
                    width: 12,
                    height: 12,
                  }} data-external={"Size=12, Weight=Regular"} />
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 206,
              width: 235,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              padding: "8px 8px 8px 8px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 8,
                top: 8,
                width: 203,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"device-mobile"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 83,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>App Settings</span>
              </div>
              <div style={{
                position: "absolute",
                left: 211,
                top: 10.5,
                width: 16,
                height: 16,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "var(--light-light-900)",
                }} />
                <div style={{
                    position: "absolute",
                    left: 2,
                    top: 2,
                    width: 12,
                    height: 12,
                  }} data-external={"Size=12, Weight=Regular"} />
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 243,
              width: 235,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              padding: "8px 8px 8px 8px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 8,
                top: 8,
                width: 203,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"device-desktop"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 103,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>System Settings</span>
              </div>
              <div style={{
                position: "absolute",
                left: 211,
                top: 10.5,
                width: 16,
                height: 16,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "var(--light-light-900)",
                }} />
                <div style={{
                    position: "absolute",
                    left: 2,
                    top: 2,
                    width: 12,
                    height: 12,
                  }} data-external={"Size=12, Weight=Regular"} />
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 280,
              width: 235,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              padding: "8px 8px 8px 8px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 8,
                top: 8,
                width: 203,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"settings-dollar"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 112,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Financial Settings</span>
              </div>
              <div style={{
                position: "absolute",
                left: 211,
                top: 10.5,
                width: 16,
                height: 16,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "var(--light-light-900)",
                }} />
                <div style={{
                    position: "absolute",
                    left: 2,
                    top: 2,
                    width: 12,
                    height: 12,
                  }} data-external={"Size=12, Weight=Regular"} />
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 317,
              width: 235,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              padding: "8px 8px 8px 8px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 8,
                top: 8,
                width: 203,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"settings-2"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 93,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Other Settings</span>
              </div>
              <div style={{
                position: "absolute",
                left: 211,
                top: 10.5,
                width: 16,
                height: 16,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "var(--light-light-900)",
                }} />
                <div style={{
                    position: "absolute",
                    left: 2,
                    top: 2,
                    width: 12,
                    height: 12,
                  }} data-external={"Size=12, Weight=Regular"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SettingsSidebar;
