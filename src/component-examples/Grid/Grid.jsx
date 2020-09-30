import React, { useMemo, useState } from "react";
import classnames from "classnames";
import styles from "./Grid.module.css";
import { times } from "lodash";

const Grid = () => {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const gridContainerStyles = useMemo(() => {
    return { height: height, width: width };
  }, [height, width]);

  const gridItems = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum".split(
    " "
  );

  const [numGridItems, setNumGridItems] = useState(2);
  const [columnGap, setColumnGap] = useState();
  const [rowGap, setRowGap] = useState();
  const [
    numGridTemplateColumnsInputs,
    setNumGridTemplateColumnsInputs,
  ] = useState(2);
  const [gridTemplateColumnsValues, setGridTemplateColumnsValues] = useState(
    ["1fr","1fr"]
  );
  const gridTemplateColumnsInputs = times(numGridTemplateColumnsInputs, (i) => (
    <input
      key={`grid-template-columns-input-${i}`}
      className={styles.small}
      onBlur={(e) => {
        const updated = gridTemplateColumnsValues.slice()
        updated[i] = e.target.value;
        setGridTemplateColumnsValues(updated);
      }}
      defaultValue={gridTemplateColumnsValues[i]}
      data-prop={`grid-template-columns-input-${i}`}
    />
  ));

  const [numGridTemplateRowsInputs, setNumGridTemplateRowsInputs] = useState(1);
  const [gridTemplateRowsValues, setGridTemplateRowsValues] = useState(
    ["5rem"]
  );
  const gridTemplateRowsInputs = times(numGridTemplateRowsInputs, (i) => (
    <input
      key={`grid-template-rows-input-${i}`}
      className={styles.small}
      onBlur={(e) => {
        const updated = gridTemplateRowsValues.slice()
        updated[i] = e.target.value;
        setGridTemplateRowsValues(updated);
      }}
      defaultValue={gridTemplateRowsValues[i]}
      data-prop={`grid-template-rows-input-${i}`}
    />
  ));



  const [numGridAutoColumnsInputs, setNumGridAutoColumnsInputs] = useState(1);
  const [numGridAutoRowsInputs, setNumGridAutoRowsInputs] = useState(1);


  const gridAutoColumnsInputs = times(numGridAutoColumnsInputs, (i) => (
    <input
      key={`grid-auto-columns-input-${i}`}
      className={styles.small}
      data-prop={`grid-auto-columns-input-${i}`}
    />
  ));
  const gridAutoRowsInputs = times(numGridAutoRowsInputs, (i) => (
    <input
      key={`grid-auto-rows-input-${i}`}
      className={styles.small}
      data-prop={`grid-auto-rows-input-${i}`}
    />
  ));

  const gridStyles = useMemo(() => {
    return {
      display: "grid",
      "column-gap": columnGap,
      "row-gap": rowGap,
      "grid-template-columns": gridTemplateColumnsValues.join(" "),
      "grid-template-rows": gridTemplateRowsValues.join(" "),
    };
  }, [columnGap, rowGap, gridTemplateColumnsValues, gridTemplateRowsValues]);
  console.log("STYLE", gridStyles);

  return (
    <div>
      <section className={classnames(styles.mainContainer, styles.flex)}>
        <aside id="sidebar" className={classnames(styles.sidebar, styles.flex)}>
          <nav className={classnames(styles.controls, styles.flex)}>
            <div className={styles.controlSection}>
              <code>
                # of grid items:
                <input
                  type="number"
                  className={styles.small}
                  defaultValue={numGridItems}
                  onChange={(e) => {
                    const num = parseInt(e.target.value, 10);
                    if (num >= 1) {
                      setNumGridItems(num);
                    }
                  }}
                  data-prop="grid-items"
                />
              </code>
            </div>
            <div className={styles.controlSection}>
              <code>
                container:
                <span className={styles.tip} data-tip="height">
                  <input
                    id="container-height-control"
                    className={styles.mid}
                    defaultValue="auto"
                    data-prop="height"
                    onBlur={(e) => {
                      setHeight(e.target.value);
                    }}
                  />
                </span>
                <span className={styles.tip} data-tip="width">
                  <input
                    id="container-width-control"
                    className={styles.mid}
                    defaultValue="auto"
                    data-prop="width"
                    onBlur={(e) => {
                      setWidth(e.target.value);
                    }}
                  />
                </span>
              </code>
            </div>

            <div className={styles.controlSection}>
              <code>
                column-gap:
                <input
                  className={styles.small}
                  onBlur={(e) => { setColumnGap(e.target.value)}}
                  data-prop="column-gap"
                />
                row-gap:
                <input
                  className={styles.small}
                  onBlur={(e) => { setRowGap(e.target.value)}}
                  data-prop="row-gap"
                />
              </code>
            </div>

            <div className={styles.controlSection}>
              <code>
                grid-template-columns:
                <input
                  type="number"
                  className={styles.small}
                  defaultValue={numGridTemplateColumnsInputs}
                  onChange={(e) => {
                    const num = parseInt(e.target.value, 10);
                    if (num >= 1) {
                      setNumGridTemplateColumnsInputs(num);
                    }
                  }}
                  data-prop="grid-template-columns-inputs"
                />
                <div className={styles.inputContainer}>
                  {gridTemplateColumnsInputs}
                </div>
              </code>
            </div>

            <div className={styles.controlSection}>
              <code>
                grid-template-rows:
                <input
                  type="number"
                  className={styles.small}
                  defaultValue={numGridTemplateRowsInputs}
                  onChange={(e) => {
                    const num = parseInt(e.target.value, 10);
                    if (num >= 1) {
                      setNumGridTemplateRowsInputs(num);
                    }
                  }}
                  data-prop="grid-template-rows-inputs"
                />
                <div className={styles.inputContainer}>
                  {gridTemplateRowsInputs}
                </div>
              </code>
            </div>

            <div className={styles.controlSection}>
              <code>
                grid-auto-columns:
                <input
                  type="number"
                  className={styles.small}
                  defaultValue={numGridAutoColumnsInputs}
                  onChange={(e) => {
                    const num = parseInt(e.target.value, 10);
                    if (num >= 1) {
                      setNumGridAutoColumnsInputs(num);
                    }
                  }}
                  data-prop="grid-auto-columns-inputs"
                />
                <div className={styles.inputContainer}>
                  {gridAutoColumnsInputs}
                </div>
              </code>
            </div>

            <div className={styles.controlSection}>
              <code>
                grid-auto-rows:
                <input
                  type="number"
                  className={styles.small}
                  defaultValue={numGridAutoRowsInputs}
                  onChange={(e) => {
                    const num = parseInt(e.target.value, 10);
                    if (num >= 1) {
                      setNumGridAutoRowsInputs(num);
                    }
                  }}
                  data-prop="grid-auto-rows-inputs"
                />
                <div className={styles.inputContainer}>
                  {gridAutoRowsInputs}
                </div>
              </code>
            </div>

            <div className={styles.controlSection}>
              <code
                className={classnames(styles.tip, styles.largeTip)}
                data-tip="To see a change, set 'flex' property to something like 'flex: 0 1 auto'"
              >
                justify-items:
                <select id="justify-items-control">
                  <option value="start">start</option>
                  <option value="end">end</option>
                  <option value="center">center</option>
                  <option value="stretch">stretch</option>
                </select>
              </code>
            </div>

            <div className={styles.controlSection}>
              <code
                className={classnames(styles.tip, styles.largeTip)}
                data-tip="To see a change, set 'flex' property to something like 'flex: 0 1 auto'"
              >
                align-items:
                <select id="align-items-control">
                  <option value="start">start</option>
                  <option value="end">end</option>
                  <option value="center">center</option>
                  <option value="stretch">stretch</option>
                </select>
              </code>
            </div>

            <div className={styles.controlSection}>
              <code
                className={classnames(styles.tip, styles.largeTip)}
                data-tip="To see a change, set 'flex' property to something like 'flex: 0 1 auto'"
              >
                justify-content:
                <select id="justify-content-control">
                  <option value="start">start</option>
                  <option value="end">end</option>
                  <option value="center">center</option>
                  <option value="space-around">space-around</option>
                  <option value="space-between">space-between</option>
                  <option value="space-evenly">space-evenly</option>
                  <option value="stretch">stretch</option>
                </select>
              </code>
            </div>

            <div className={styles.controlSection}>
              <code
                className={classnames(styles.tip, styles.largeTip)}
                data-tip="To see a change, set 'flex' property to something like 'flex: 0 1 auto'"
              >
                align-content:
                <select id="align-content-control">
                  <option value="start">start</option>
                  <option value="end">end</option>
                  <option value="center">center</option>
                  <option value="space-around">space-around</option>
                  <option value="space-between">space-between</option>
                  <option value="space-evenly">space-evenly</option>
                  <option value="stretch">stretch</option>
                </select>
              </code>
            </div>
          </nav>
        </aside>

        <div
          id="container"
          className={styles.gridContainer}
          style={gridContainerStyles}
        >
          <figure id="demo" className={styles.demo} style={gridStyles}>
            {gridItems.slice(0, numGridItems).map((word, i) => (
              <div
                key={word}
                id={`item-${i}`}
                style={{ backgroundColor: `hsl(${i * 20},50%,75%)` }}
                className={styles.gridItem}
              >
                <span contenteditable="true">{word}</span>
              </div>
            ))}
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Grid;
