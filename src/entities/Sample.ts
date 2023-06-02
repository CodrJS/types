import type { Types } from "mongoose";
import { Base, IBase } from "./Base";

export interface ISample extends IBase {
  projectId: Types.ObjectId;
  datasetId: Types.ObjectId;
  payload: object;
}

export class Sample extends Base {
  projectId: Types.ObjectId;
  datasetId: Types.ObjectId;
  payload: object;

  constructor({ projectId, datasetId, payload, _id, __v, createdAt, updatedAt, createdBy, updatedBy }: ISample) {
    super({ _id, __v, createdAt, updatedAt, createdBy, updatedBy });
    this.projectId = projectId;
    this.datasetId = datasetId;
    this.payload = payload;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      projectId: this.projectId,
      datasetId: this.datasetId,
      payload: this.payload,
    };
  }
}
