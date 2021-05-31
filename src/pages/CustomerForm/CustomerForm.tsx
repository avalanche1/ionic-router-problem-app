import React, { useState as use_state } from "react";
import { useParams } from "react-router";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";

import { fixtures } from "../../data/fixtures";

export function CustomerForm(): JSX.Element {
  const { id } = useParams() as { id: string };
  console.log("id on render", id);
  useIonViewWillEnter(() => {
    console.log("id on useIonViewWillEnter", id);
    set_customer_id(id);
  });

  const [customerId, set_customer_id] = use_state("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Customer {id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {JSON.stringify(
          fixtures.customers.find((customer) => customer._id === customerId)
        )}
      </IonContent>
    </IonPage>
  );
}
