import type { Types } from "mongoose";
import { Base, IBase } from "./Base";

export interface IAnnotation extends IBase {
  projectId: Types.ObjectId;
  datasetId: Types.ObjectId;
  sampleId: Types.ObjectId;
  annotatedBy: Types.ObjectId;
  value: any;
}

export class Annotation extends Base {
  projectId: Types.ObjectId;
  datasetId: Types.ObjectId;
  sampleId: Types.ObjectId;
  annotatedBy: Types.ObjectId;
  value: any;

  constructor({
    projectId,
    datasetId,
    sampleId,
    value,
    annotatedBy,
    _id,
    __v,
    createdAt,
    updatedAt,
  }: IAnnotation) {
    super({ _id, __v, createdAt, updatedAt });
    this.projectId = projectId;
    this.datasetId = datasetId;
    this.value = value;
    this.sampleId = sampleId;
    this.annotatedBy = annotatedBy;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      projectId: this.projectId,
      annotatedBy: this.annotatedBy,
      sampleId: this.sampleId,
      datasetId: this.datasetId,
      value: this.value,
    };
  }
}
