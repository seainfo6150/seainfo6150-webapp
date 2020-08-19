import React, { useMemo, useState } from "react";
import classnames from "classnames";
import styles from "./Grid.module.css";

const Grid = () => {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const gridContainerStyles = useMemo(() => {
    return { height: height, width: width };
  }, [height, width]);

  const [gridTemplateColumns, setGridTemplateColumns] = useState([]);
  const [
    numGridTemplateColumnsInputs,
    setNumGridTemplateColumnsInputs,
  ] = useState(1);
  const gridStyles = useMemo(() => {
    return { "grid-template-columns": gridTemplateColumns.join(",") };
  }, [gridTemplateColumns]);

  let gridTemplateColumnsInputs = [];
  for (var i=0; i<numGridTemplateColumnsInputs; i++) {
    gridTemplateColumnsInputs.push(<input key={`grid-template-columns-input-${i}`} class={styles.small} data-prop={`grid-template-columns-input-${i}`} />)
  }

  return (
    <div>
      <section class={classnames(styles.mainContainer, styles.flex)}>
        <aside id="sidebar" class={classnames(styles.sidebar, styles.flex)}>
          <nav class={classnames(styles.controls, styles.flex)}>
            <div class={styles.controlSection}>
              <code>
                container:
                <span class={styles.tip} data-tip="height">
                  <input
                    id="container-height-control"
                    class={styles.mid}
                    defaultValue="auto"
                    data-prop="height"
                    onChange={(e) => {
                      setHeight(e.target.value);
                    }}
                  />
                </span>
                <span class={styles.tip} data-tip="width">
                  <input
                    id="container-width-control"
                    class={styles.mid}
                    defaultValue="auto"
                    data-prop="width"
                    onChange={(e) => {
                      setWidth(e.target.value);
                    }}
                  />
                </span>
              </code>
            </div>
            <div class={styles.controlSection}>
              <code>
                grid-template-columns:
    
                  {gridTemplateColumnsInputs}
                  <input
                    type="number"
                    class={styles.small}
                    defaultValue="1"
                    onChange={(e) => {
                        if (e.target.value <= 1) {
                            setNumGridTemplateColumnsInputs(e.target.value);
                        }
                      }}
                    data-prop="grid-template-columns-inputs"
                  />

              </code>
            </div>
            <div class={styles.controlSection}>
              <code>
                item <span id="selected-index"></span>:
                <span class={styles.tip} data-tip="flex-grow">
                  <input
                    id="item-flex-grow-control"
                    class={classnames(styles.selectedItemField, styles.small)}
                    value=""
                    data-prop="grow"
                  />
                </span>
                <span class={styles.tip} data-tip="flex-shrink">
                  <input
                    id="item-flex-shrink-control"
                    class={classnames(styles.selectedItemField, styles.small)}
                    value=""
                    data-prop="shrink"
                  />
                </span>
                <span
                  class={classnames(styles.tip, styles.flexBasisTip)}
                  data-tip="flex-basis (try 300px or 20%)"
                >
                  <input
                    id="item-flex-basis-control"
                    class={classnames(styles.selectedItemField, styles.mid)}
                    value=""
                    data-prop="basis"
                  />
                </span>
              </code>
              <code
                class={classnames(styles.tip, styles.largeTipBottom)}
                data-tip="order of items is 0 by default"
              >
                order:
                <input
                  id="item-order-control"
                  class={classnames(styles.selectedItemField, styles.small)}
                  value=""
                  data-prop="order"
                />
              </code>
              <code
                class={classnames(styles.tip, styles.largeTipBottom)}
                data-tip="Equivalent of align-items per item"
              >
                align-self:
                <select
                  id="item-align-self-control"
                  class="selected-item-field"
                  data-prop="align"
                >
                  <option value="">auto</option>
                  <option value="flex-start">flex-start</option>
                  <option value="flex-end">flex-end</option>
                  <option value="center">center</option>
                  <option value="baseline">baseline</option>
                  <option value="stretch">stretch</option>
                </select>
              </code>
            </div>
            <div class={styles.controlSection}>
              <code>
                # of flex items:
                <input id="count" class={styles.small} maxlength="3" />
                <span id="count-increase" class="count-control small">
                  +
                </span>
                <span id="count-decrease" class="count-control small">
                  -
                </span>
              </code>
            </div>
            <div class={styles.controlSection}>
              <code>
                flex-direction:
                <select id="flex-direction-control">
                  <option value="row">row</option>
                  <option value="row-reverse">row-reverse</option>
                  <option value="column">column</option>
                  <option value="column-reverse">column-reverse</option>
                </select>
              </code>
            </div>
            <div class={styles.controlSection}>
              <code>
                flex-wrap:
                <select id="flex-wrap-control">
                  <option value="wrap">wrap</option>
                  <option value="wrap-reverse">wrap-reverse</option>
                  <option value="nowrap">nowrap</option>
                </select>
              </code>
            </div>
            <div class={styles.controlSection}>
              <code
                class={classnames(styles.tip, styles.largeTip)}
                data-tip="To see a change, set 'flex' property to something like 'flex: 0 1 auto'"
              >
                justify-content:
                <select id="justify-content-control">
                  <option value="flex-start">flex-start</option>
                  <option value="flex-end">flex-end</option>
                  <option value="center">center</option>
                  <option value="baseline">baseline</option>
                  <option value="space-around">space-around</option>
                  <option value="space-between">space-between</option>
                  <option value="space-evenly">space-evenly</option>
                  <option value="stretch">stretch</option>
                </select>
              </code>
            </div>
            <div class={styles.controlSection}>
              <code class="">
                align-items:
                <select id="align-items-control">
                  <option value="stretch">stretch</option>
                  <option value="flex-start">flex-start</option>
                  <option value="flex-end">flex-end</option>
                  <option value="center">center</option>
                  <option value="baseline">baseline</option>
                </select>
              </code>
            </div>
            <div class={styles.controlSection}>
              <code
                class={classnames(styles.tip, styles.largeTip)}
                data-tip="Only works when wrapping on several lines"
              >
                align-content:
                <select id="align-content-control">
                  <option value="stretch">stretch</option>
                  <option value="space-between">space-between</option>
                  <option value="space-around">space-around</option>
                  <option value="flex-start">flex-start</option>
                  <option value="flex-end">flex-end</option>
                  <option value="center">center</option>
                </select>
              </code>
            </div>
          </nav>
        </aside>

        <div
          id="container"
          class={styles.gridContainer}
          style={gridContainerStyles}
        >
          <figure id="demo" class={styles.demo}>
            <div id="item-1" class={styles.gridItem}>
              <span contenteditable="true">Lorem ipsum</span>
            </div>
            <div id="item-2" class={styles.gridItem}>
              <span contenteditable="true">dolor</span>
            </div>
            <div id="item-3" class={styles.gridItem}>
              <span contenteditable="true">sit</span>
            </div>
            <div id="item-4" class={styles.gridItem}>
              <span contenteditable="true">amet</span>
            </div>
            <div id="item-5" class={styles.gridItem}>
              <span contenteditable="true">consectetur</span>
            </div>
            <div id="item-6" class={styles.gridItem}>
              <span contenteditable="true">adipiscing elit</span>
            </div>
            <div id="item-7" class={styles.gridItem}>
              <span contenteditable="true">nunc</span>
            </div>
            <div id="item-8" class={styles.gridItem}>
              <span contenteditable="true">enim</span>
            </div>
            <div id="item-9" class={styles.gridItem}>
              <span contenteditable="true">nunc</span>
            </div>
            <div id="item-10" class={styles.gridItem}>
              <span contenteditable="true">volutpat eget</span>
            </div>
            <div id="item-11" class={styles.gridItem}>
              <span contenteditable="true">aliquam</span>
            </div>
            <div id="item-12" class={styles.gridItem}>
              <span contenteditable="true">nec</span>
            </div>
            <div id="item-13" class={styles.gridItem}>
              <span contenteditable="true">accumsan rutrum</span>
            </div>
            <div id="item-14" class={styles.gridItem}>
              <span contenteditable="true">bacon</span>
            </div>
            <div id="item-15" class={styles.gridItem}>
              <span contenteditable="true">maecenas</span>
            </div>
            <div id="item-16" class={styles.gridItem}>
              <span contenteditable="true">nunc</span>
            </div>
            <div id="item-17" class={styles.gridItem}>
              <span contenteditable="true">voldermere</span>
            </div>
            <div id="item-18" class={styles.gridItem}>
              <span contenteditable="true">it</span>
            </div>
            <div id="item-19" class={styles.gridItem}>
              <span contenteditable="true">las</span>
            </div>
            <div id="item-20" class={styles.gridItem}>
              <span contenteditable="true">quid</span>
            </div>
            <div id="item-21" class={styles.gridItem}>
              <span contenteditable="true">tostidos</span>
            </div>
            <div id="item-22" class={styles.gridItem}>
              <span contenteditable="true">gray</span>
            </div>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Grid;
