// figma: 7:13215 Sidebar (3 variants)
const __variants = {
  "property1=Close": { width: 64, height: 3491 },
  "property1=Open with Submenu": { height: 9332 },
};
const __vkey = (p) => "property1=" + p.property1;

export function Sidebar(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "open" };
  const __vs = __variants[__vkey(props)] ?? {};
  return (
    <div className={props.className} style={{
      width: 252,
      height: 4256,
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
        width: 252,
        height: 65,
        border: "1px solid var(--transparent-secondry-transparent)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "10px 16px 10px 16px",
        justifyContent: "center",
      }}>
        <div style={{
          position: "absolute",
          left: 16,
          top: 14.5,
          width: 114.545,
          height: 36,
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 65,
        width: 252,
        height: 4191,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "24px 24px 24px 24px",
      }}>
        <div style={{
          position: "absolute",
          left: 24,
          top: 24,
          width: 204,
          height: 104,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 204,
            height: 18,
            fontFamily: "Nunito",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "var(--brand-secondry)",
          }}>Main</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 204,
            height: 78,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 37,
              borderRadius: 5,
              backgroundColor: "var(--primary-shades-primary-100)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
              flexWrap: "wrap",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"layout-grid"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 70,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--brand-primary)",
                }}>Dashboard</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
                  backgroundColor: "var(--primary-shades-primary-200)",
                }} />
                <div style={{
                    position: "absolute",
                    left: 2,
                    top: 2,
                    width: 12,
                    height: 12,
                  }} data-external={"chevron-down"} />
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 41,
              width: 204,
              height: 37,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"user-edit"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 83,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Super Admin</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
                  }} data-external={"chevron-right"} />
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 144,
          width: 204,
          height: 1,
          backgroundColor: "var(--transparent-secondry-transparent)",
        }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 161,
          width: 204,
          height: 514,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 204,
            height: 18,
            fontFamily: "Nunito",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "var(--brand-secondry)",
          }}>Inventory</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 204,
            height: 488,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"box"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 57,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Products</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 41,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"table-plus"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 95,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Create Product</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 82,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"progress-alert"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 108,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Expired Products</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 123,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"trending-up-2"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 73,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Low Stocks</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 164,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"list-details"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 58,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Category</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 205,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"carousel-vertical"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 87,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Sub Category</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 246,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"triangles"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 46,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Brands</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 287,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"brand-unity"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 34,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Units</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 328,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"checklist"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 113,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Variant Attributes</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 369,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"certificate"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 71,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Warranties</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 410,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"barcode"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 86,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Print Barcode</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 451,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"qrcode"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 91,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Print QR Code</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 691,
          width: 204,
          height: 1,
          backgroundColor: "var(--transparent-secondry-transparent)",
        }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 708,
          width: 204,
          height: 145,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 204,
            height: 18,
            fontFamily: "Nunito",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "var(--brand-secondry)",
          }}>Stock</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 204,
            height: 119,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"stack-3"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 90,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Manage Stock</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 41,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"stairs-up"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 113,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Stock Adjustment</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 82,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"stack-pop"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 91,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Stock Transfer</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 869,
          width: 204,
          height: 1,
          backgroundColor: "var(--transparent-secondry-transparent)",
        }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 886,
          width: 204,
          height: 227,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 204,
            height: 18,
            fontFamily: "Nunito",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "var(--brand-secondry)",
          }}>Sales</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 204,
            height: 201,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"shopping-cart"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 35,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Sales</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 41,
              width: 204,
              height: 37,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"file-invoice"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 51,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Invoices</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 82,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"receipt-refund"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 81,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Sales Return</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 123,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"files"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 64,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Quotation</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 164,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"device-laptop"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 29,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>POS</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
        <div style={{
          position: "absolute",
          left: 24,
          top: 1129,
          width: 226,
          height: 1,
          backgroundColor: "var(--transparent-secondry-transparent)",
        }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 1146,
          width: 204,
          height: 145,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 204,
            height: 18,
            fontFamily: "Nunito",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "var(--brand-secondry)",
          }}>Promo</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 204,
            height: 119,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 20,
              padding: "8px 12px 8px 12px",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 80,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"ticket"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 56,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Coupons</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 41,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 20,
              padding: "8px 12px 8px 12px",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 81,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"cards"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 57,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Gift Card</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 82,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"file-percent"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 56,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Discount</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
        <div style={{
          position: "absolute",
          left: 24,
          top: 1307,
          width: 204,
          height: 1,
          backgroundColor: "var(--transparent-secondry-transparent)",
        }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 1324,
          width: 204,
          height: 148,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 204,
            height: 18,
            fontFamily: "Nunito",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "var(--brand-secondry)",
          }}>Purchases</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 204,
            height: 122,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 40,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 9.5,
                width: 90,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"shopping-bag"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 66,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Purchases</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 44,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"file-unknown"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 100,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Purchase Order</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 85,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"file-upload"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 105,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Purchase Return</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 1488,
          width: 204,
          height: 1,
          backgroundColor: "var(--transparent-secondry-transparent)",
        }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 1505,
          width: 204,
          height: 350,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 204,
            height: 18,
            fontFamily: "Nunito",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "var(--brand-secondry)",
          }}>Finance &amp; Accounts</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 204,
            height: 324,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 37,
              borderRadius: 10,
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
                width: 162,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"file-stack"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 61,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Expenses</span>
              </div>
              <div style={{
                position: "absolute",
                left: 180,
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
              top: 41,
              width: 204,
              height: 37,
              borderRadius: 10,
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
                width: 162,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"file-pencil"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 46,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Income</span>
              </div>
              <div style={{
                position: "absolute",
                left: 180,
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
              top: 82,
              width: 204,
              height: 37,
              borderRadius: 10,
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
                width: 188,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"building-bank"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 95,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Bank Accounts</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 123,
              width: 204,
              height: 37,
              borderRadius: 10,
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
                width: 188,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"moneybag"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 98,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Money Transfer</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 164,
              width: 204,
              height: 37,
              borderRadius: 10,
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
                width: 188,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"report-money"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 91,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Balance Sheet</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 205,
              width: 204,
              height: 37,
              borderRadius: 10,
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
                width: 188,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"alert-circle"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 82,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Trial Balance</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 246,
              width: 204,
              height: 37,
              borderRadius: 10,
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
                width: 188,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"zoom-money"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 67,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Cash Flow</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 287,
              width: 204,
              height: 37,
              borderRadius: 10,
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
                width: 188,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"file-infinity"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 122,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Account Statement</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 1871,
          width: 204,
          height: 1,
          backgroundColor: "var(--light-light-900)",
        }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 1888,
          width: 204,
          height: 227,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 204,
            height: 18,
            fontFamily: "Nunito",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "var(--brand-secondry)",
          }}>Peoples</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 204,
            height: 201,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"users-group"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 69,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Customers</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 41,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"user-up"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 41,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Billers</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 82,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"user-dollar"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 60,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Suppliers</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 123,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"home-bolt"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 41,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Stores</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 164,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"archive"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 80,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Warehouses</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 2131,
          width: 204,
          height: 1,
          backgroundColor: "var(--transparent-secondry-transparent)",
        }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 2148,
          width: 204,
          height: 350,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 204,
            height: 18,
            fontFamily: "Nunito",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "var(--brand-secondry)",
          }}>HRM</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 204,
            height: 324,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"user"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 70,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Employees</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 41,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"compass"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 84,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Departments</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 82,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"git-merge"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 76,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Designation</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 123,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"arrows-shuffle"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 37,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Shifts</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 164,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"user-cog"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 132,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Attendence</span>
                <div style={{
                  position: "absolute",
                  left: 164,
                  top: 2.5,
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
            <div style={{
              position: "absolute",
              left: 0,
              top: 205,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"calendar"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 132,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 700,
                  fontSize: 13,
                  lineHeight: "16px",
                  color: "var(--grey-grey-900)",
                }}>Leaves</span>
                <div style={{
                  position: "absolute",
                  left: 164,
                  top: 2.5,
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
            <div style={{
              position: "absolute",
              left: 0,
              top: 246,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"calendar-share"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 56,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Holidays</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 287,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"file-dollar"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 45,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Payroll</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
        <div style={{
          position: "absolute",
          left: 24,
          top: 2514,
          width: 204,
          height: 1,
          backgroundColor: "var(--transparent-secondry-transparent)",
        }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 2531,
          width: 204,
          height: 514,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 204,
            height: 18,
            fontFamily: "Nunito",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "var(--brand-secondry)",
          }}>Reports</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 204,
            height: 488,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
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
                  }} data-external={"chart-bar"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 82,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Sales Report</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 41,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
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
                  }} data-external={"chart-pie-2"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 105,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Purchase Report</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 82,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
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
                  }} data-external={"triangle-inverted"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 107,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Inventory Report</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 123,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
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
                  }} data-external={"businessplan"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 91,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Invoice Report</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 164,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
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
                  }} data-external={"user-star"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 101,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Supplier Report</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 205,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
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
                  }} data-external={"report"} />
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
                }}>Customer Report</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 246,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
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
                  }} data-external={"report-analytics"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 97,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Product Report</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 287,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
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
                  }} data-external={"file-vector"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 101,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Expense Report</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 328,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
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
                  }} data-external={"chart-ppf"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 93,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Income Report</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 369,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
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
                  }} data-external={"chart-dots-2"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 70,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Tax Report</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 410,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
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
                  }} data-external={"chart-donut"} />
                <span style={{
                  position: "absolute",
                  left: 26,
                  top: 0,
                  width: 81,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Profit &amp; Loss</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 451,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
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
                  }} data-external={"report-search"} />
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
                }}>Annual Report</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 3061,
          width: 204,
          height: 1,
          backgroundColor: "var(--light-light-900)",
        }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 3078,
          width: 204,
          height: 145,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 204,
            height: 18,
            fontFamily: "Nunito",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "var(--brand-secondry)",
          }}>User Management</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 204,
            height: 119,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"shield-up"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 37,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Users</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 41,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"jump-rope"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 129,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Roles &amp; Permissions</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 82,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"trash-x"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 154,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Delete Account Request</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 3239,
          width: 204,
          height: 1,
          backgroundColor: "var(--light-light-900)",
        }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 3256,
          width: 204,
          height: 227,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 204,
            height: 18,
            fontFamily: "Nunito",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "var(--brand-secondry)",
          }}>Content (CMS)</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 204,
            height: 201,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"page-break"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 39,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Pages</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 41,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"wallpaper"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 30,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Blog</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 82,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"map-pin"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 54,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Location</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 123,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"star"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 80,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Testimonials</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 164,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"Size=16, Weight=Regular"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 28,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>FAQ</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 3499,
          width: 204,
          height: 1,
          backgroundColor: "var(--transparent-secondry-transparent)",
        }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 3516,
          width: 204,
          height: 309,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 204,
            height: 18,
            fontFamily: "Nunito",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "var(--brand-secondry)",
          }}>Pages</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 204,
            height: 283,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"user-circle"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 42,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Profile</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 41,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"shield"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 94,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Authentication</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 82,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 154,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"file-x"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 67,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Error Page</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 123,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"file"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 72,
                  height: 21,
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "var(--grey-grey-900)",
                }}>Blank Page</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 164,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"currency-dollar"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 44,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Pricing</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 205,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"send"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 85,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Coming Soon</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 246,
              width: 204,
              height: 37,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"alert-triangle"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 124,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Under Maintenance</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 24,
          top: 3841,
          width: 204,
          height: 1,
          backgroundColor: "var(--light-light-900)",
        }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 3858,
          width: 204,
          height: 309,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 204,
            height: 18,
            fontFamily: "Nunito",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "var(--brand-secondry)",
          }}>Settings</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 26,
            width: 204,
            height: 283,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 164,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
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
                  left: 24,
                  top: 0,
                  width: 106,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>General Settings</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 41,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 164,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
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
                  left: 24,
                  top: 0,
                  width: 109,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Website Settings</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 82,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 164,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
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
                  left: 24,
                  top: 0,
                  width: 83,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>App Settings</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 123,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 164,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
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
                  left: 24,
                  top: 0,
                  width: 103,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>System Settings</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 164,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 164,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
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
                  left: 24,
                  top: 0,
                  width: 112,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Financial Settings</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 205,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 164,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
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
                  left: 24,
                  top: 0,
                  width: 93,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Other Settings</span>
              </div>
              <div style={{
                position: "absolute",
                left: 176,
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
              top: 246,
              width: 204,
              height: 37,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              padding: "8px 12px 8px 12px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 12,
                top: 8,
                width: 180,
                height: 21,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 2.5,
                    width: 16,
                    height: 16,
                  }} data-external={"logout"} />
                <span style={{
                  position: "absolute",
                  left: 24,
                  top: 0,
                  width: 45,
                  height: 21,
                  fontFamily: "Nunito",
                  fontSize: 14,
                  lineHeight: "15.500px",
                  color: "var(--grey-grey-900)",
                }}>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
