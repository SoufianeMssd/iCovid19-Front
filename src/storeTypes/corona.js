// @flow

import type {RecordFactory, RecordOf} from "immutable";
import {List, Record} from "immutable";

export type AnomalieProps = {
  id: string,
  tasks: List<TaskType>,
  designation: string,
  classification: string,
  libelle: string,
  site: string,
  usine: string,
  atelier: string,
  atelierId: null | number,
  unity: UniteType,
  niveauRisque: "A" | "B" | "C",
  comment: string,
  creationDate: string,
  numeroEquip: string,
  file: string,
  comments: List<CommentType>,
  submitter: string,
  closeDate: string,
  interventionId: string
};

export type AnomalieType = RecordOf<AnomalieProps>;
export type AnomalieFactoryType = RecordFactory<AnomalieProps>;

export const AnomalieFactory: AnomalieFactoryType = Record({
  "id": "",
  "tasks": List(),
  "designation": "",
  "classification": "",
  "libelle": "",
  "site": "",
  "usine": "",
  "atelier": "",
  "atelierId": null,
  "unity": UniteFactory(),
  "niveauRisque": "C",
  "comment": "",
  "creationDate": "",
  "numeroEquip": "",
  // $FlowFixMe
  "file": null,
  "comments": List(),
  "submitter": "",
  "closeDate": "",
  // $FlowFixMe
  "interventionId": null
});

type AnomalieFormStoreProps = {
  status: "loading" | "error" | "success" | "idle",
  error: string,
  file: string
};

// Anomaly Form
export type AnomalieFormStoreType = RecordOf<AnomalieFormStoreProps>;
export type AnomalieFormStoreFactoryType = RecordFactory<AnomalieFormStoreProps>;

export const AnomalieFormStoreFactory: AnomalieFormStoreFactoryType = Record({
  "status": "idle",
  "error": "",
  "file": ""
});

// Anomaly Filter

type anomalyFiltersProps = {
  risks: List<string>,
  designation: string,
  classifications: List<string>,
  unites: List<number>,
  currentYear: number,
  currentMonth: number
};

export type anomalieFiltersType = RecordOf<anomalyFiltersProps>;
export type anomalyFiltersFactoryType = RecordFactory<anomalyFiltersProps>;

export const anomalyFiltersFactory: anomalyFiltersFactoryType = Record({
  "risks": List(),
  "designation": "",
  "classifications": List(),
  "unites": List(),
  "currentYear": -1,
  "currentMonth": -1
});

// Anomaly List

type AnomalieListStoreProps = {
  status: "loading" | "error" | "success" | "idle",
  error: string,
  anomalies: List<AnomalieType>,
  openedAnomalie?: AnomalieType,
  anomalieDetailOpen?: boolean,
  isResultFilter?: boolean,
  filters: anomalieFiltersType,
  page: number
};

export type AnomalieListStoreType = RecordOf<AnomalieListStoreProps>;
export type AnomalieListStoreFactoryType = RecordFactory<AnomalieListStoreProps>;

export const AnomalieListStoreFactory: AnomalieListStoreFactoryType = Record({
  "status": "idle",
  "error": "",
  "anomalies": List(),
  "openedAnomalie": undefined,
  "anomalieDetailOpen": undefined,
  "isResultFilter": undefined,
  "filters": anomalyFiltersFactory({}),
  "page": 0
});

type AnomalieDI = {
  status: "loading" | "error" | "success" | "idle",
  message: string,
}

export type AnomalieDIStoreType = RecordOf<AnomalieDI>;
export type AnomalieDIStoreFactoryType = RecordFactory<AnomalieDI>;

export const AnomalieDIStoreFactory : AnomalieDIStoreFactoryType = Record({
  "status": "idle",
  "message": ""
});

export const categoryOrder = {
  "SECURITY": 1,
  "QUALITY": 2,
  "PRODUCTION": 3,
  "COSTS": 4,
  "IMPLICATION": 5
};
