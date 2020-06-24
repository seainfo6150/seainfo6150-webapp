import React, { useState } from "react";

import styles from "./JsFundamentals.module.css";

const DefinitionPair = (props) => {
  return (
    <div className={styles.definitionPair}>
      <dt>{props.objectKey}:</dt>
      <dd>
        {typeof props.value === "object"
          ? JSON.stringify(props.value)
          : `${props.value}`}
      </dd>
    </div>
  );
};

let user = {
  "foo-bar": "baz",
  id: "aprilbingham",
  email: "a.bingham@northeastern.edu",
  graduationYear: 2019,
  graduationPath: ["BS", "MS", "PhD"],
  classes: {
    INFO6150: { title: "Web UI Engineering" },
  },
  getDisplayName: () => {
    return "April B.";
  },
};

let anObject = {};
anObject.aUserNameFunction = user.getDisplayName;
anObject.userName = anObject.aUserNameFunction();
anObject.userId = user.id;
anObject.userId = anObject.userId + " (this is a userId)";

let aCopyOfUser = user;
aCopyOfUser["foo-bar"] = "Blah";
let anIndependentCopyOfUser = Object.assign({}, user);
anIndependentCopyOfUser["foo-bar"]= "Baz";

const JsFundamentalsObjects = (props) => {
  const [currentObject, setCurrentObject] = useState({});
  const [currentObjectName, setCurrentObjectName] = useState();

  function updateUser() {
    user.classes = {
      ...user.classes,
      INFO6250: { title: "Lots of Javascript" },
    };
    setCurrentObject(user);
    setCurrentObjectName("user");
  }

  function deleteUserKeys() {
    Object.keys(user).forEach((key) => delete user[key]);
    setCurrentObject(user);
    setCurrentObjectName("user");
  }

  let forInObjectContent = [];
  for (const key in currentObject) {
    if (currentObject.hasOwnProperty(key)) {
      forInObjectContent.push(
        <DefinitionPair key={key} value={currentObject[key]} objectKey={key} />
      );
    }
  }

  return (
    <section>
      <header>JsFundamentalsObjects component</header>

      <h2>Choose an object to view</h2>
      <ul className={styles.list}>
        <li>
          <button
            onClick={() => {
              setCurrentObject(anObject);
              setCurrentObjectName("anObject");
            }}
          >
            anObject
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentObject(user);
              setCurrentObjectName("user");
            }}
          >
            user
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentObject(aCopyOfUser);
              setCurrentObjectName("aCopyOfUser");
            }}
          >
            aCopyOfUser
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentObject(anIndependentCopyOfUser);
              setCurrentObjectName("anIndependentCopyOfUser");
            }}
          >
            anIndependentCopyOfUser
          </button>
        </li>
      </ul>

      <h2>Do some stuff</h2>
      <ul className={styles.list}>
        <li>
          <button onClick={() => updateUser()}>Update user object</button>
          <button onClick={() => deleteUserKeys()}>Delete user keys</button>
        </li>
      </ul>

      <h2>Viewing current object: {currentObjectName}</h2>
      <h3>using Object.keys</h3>
      <dl>
        {Object.keys(currentObject).map((key) => (
          <DefinitionPair
            key={key}
            value={currentObject[key]}
            objectKey={key}
          />
        ))}
      </dl>

      <h3>using Object.getOwnPropertyNames</h3>
      <dl>
        {Object.getOwnPropertyNames(currentObject).map((key) => (
          <DefinitionPair
            key={key}
            value={currentObject[key]}
            objectKey={key}
          />
        ))}
      </dl>

      <h3>using for...in</h3>
      <dl>{forInObjectContent}</dl>
    </section>
  );
};

export default JsFundamentalsObjects;
