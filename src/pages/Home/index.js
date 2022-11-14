import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNoteSticky,
  faMagnifyingGlass,
  faCloudArrowUp,
  faAngleRight,
  faAngleDown,
  faFilter,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.scss";

function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.rects}>
            <span className={styles.rectItem}></span>
            <span className={styles.rectItem}></span>
            <span className={styles.rectItem}></span>
            <span className={styles.rectItem}></span>
            <span className={styles.rectItem}></span>
            <span className={styles.rectItem}></span>
            <span className={styles.rectItem}></span>
            <span className={styles.rectItem}></span>
            <span className={styles.rectItem}></span>
          </div>
          <img className={styles.logo} src="assets/logo--Gaggle.svg" alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.alert}>
            <img src="assets/icon--alert.svg" alt="alert" />
            <span className={styles.save}>Save unsuccessful.</span>
            <span className={styles.spinner}></span>
            <span className={styles.retry}>Retrying...</span>
          </div>
        </div>
      </div>
      <div className={styles.topbar}>
        <div className={styles.btnGroup}>
          <div className={styles.groupItem}>
            <button className={styles.searchBtn}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <p className={styles.itemName}>Button 1</p>
          </div>
          <div className={styles.groupItem}>
            <button className={styles.searchBtn}>
              <FontAwesomeIcon icon={faCloudArrowUp} />
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <p className={styles.itemName}>Button 2</p>
          </div>
          <div className={styles.groupItem}>
            <button className={styles.searchBtn}>
              <FontAwesomeIcon icon={faNoteSticky} />
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <p className={styles.itemName}>Button 3</p>
          </div>
        </div>
        <div className={styles.btnOptions}>
          <div className={styles.optItem}>
            <div className={styles.filterOpt}>
              <FontAwesomeIcon icon={faFilter} />
              <input type="text" placeholder="Find..." />
            </div>
            <p className={styles.itemName}>Filter by Keyword</p>
          </div>
          <div className={`${styles.optItem} ${styles.downloadItem}`}>
            <button>
              <FontAwesomeIcon icon={faDownload} />
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <p className={styles.itemName}>Export</p>
          </div>
        </div>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.check}>
          <label className="custom-checkbox">
            .
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className={styles.date}>Date</div>
        <div className={styles.splitter}></div>
        <div className={styles.type}>Incident Type</div>
        <div className={styles.splitter}></div>
        <div className={styles.status}>Status</div>
      </div>
    </div>
  );
}

export default Home;
