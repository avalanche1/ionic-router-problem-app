import {IonBadge, IonIcon, IonItem, IonLabel} from "@ionic/react";

import {CustomerRecord_T} from "../data/types";

export function CustomerRecord({customerRec, overdue}: Props) {
  return (
    <IonItem routerLink={`/edit-customer/${customerRec._id}`}>
      <IonLabel>
        <h2>{customerRec.fullName}</h2>
      </IonLabel>
    </IonItem>
  );
}

type Props = {
  key: string;
  customerRec: CustomerRecord_T;
  overdue: boolean;
};
