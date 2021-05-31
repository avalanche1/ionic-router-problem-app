import {IonLabel, IonList, IonListHeader} from "@ionic/react";
import {CustomerRecord} from "./CustomerRecord";

import {Customers} from "../data/types";

export function CustomerSubList({overdue, headerText, list}: Props) {
  return (
    <IonList>
      <IonListHeader mode="ios" style={{marginBottom: -10, paddingLeft: 16}}>
        <IonLabel color={overdue ? "danger" : "success"} style={{marginTop: "-1em"}}>
          {headerText}
        </IonLabel>
      </IonListHeader>
      {list.map((customerRec) => (
        <CustomerRecord key={customerRec._id} {...{customerRec, overdue}} />
      ))}
    </IonList>
  );
}

type Props = {
  overdue: boolean;
  headerText: string;
  list: Customers;
};
