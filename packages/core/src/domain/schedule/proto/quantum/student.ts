/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "com.superkma.quantum";

export interface GetStudentTuitionFeeReq {
  studentCode: string;
}

export interface GetStudentTuitionFeeRsp {
  code: number;
  message: string;
  data: GetStudentTuitionFeeRsp_Data | undefined;
}

export interface GetStudentTuitionFeeRsp_TuitionInfo {
  paidAmount: number;
  dueAmount: number;
  dueTotalAmount: number;
}

export interface GetStudentTuitionFeeRsp_PaidDetail {
  type: string;
  description: string;
  date: string;
  amount: number;
}

export interface GetStudentTuitionFeeRsp_DueDetail {
  type: string;
  semester: string;
  amount: number;
  dueAmount?: number | undefined;
}

export interface GetStudentTuitionFeeRsp_DueTotalDetail {
  type: string;
  semester: string;
  numOfCredit: string;
  discount: string;
  resitCourse: string;
  upScore: string;
  amount: number;
  dueAmount: number;
}

export interface GetStudentTuitionFeeRsp_TuitionDetail {
  paidDetail: GetStudentTuitionFeeRsp_PaidDetail[];
  dueDetail: GetStudentTuitionFeeRsp_DueDetail[];
  dueTotalDetail: GetStudentTuitionFeeRsp_DueTotalDetail[];
}

export interface GetStudentTuitionFeeRsp_Data {
  tuitionInfo: GetStudentTuitionFeeRsp_TuitionInfo | undefined;
  tuitionDetail: GetStudentTuitionFeeRsp_TuitionDetail | undefined;
}

function createBaseGetStudentTuitionFeeReq(): GetStudentTuitionFeeReq {
  return { studentCode: "" };
}

export const GetStudentTuitionFeeReq = {
  encode(message: GetStudentTuitionFeeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.studentCode !== "") {
      writer.uint32(10).string(message.studentCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStudentTuitionFeeReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStudentTuitionFeeReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.studentCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStudentTuitionFeeReq {
    return { studentCode: isSet(object.studentCode) ? globalThis.String(object.studentCode) : "" };
  },

  toJSON(message: GetStudentTuitionFeeReq): unknown {
    const obj: any = {};
    if (message.studentCode !== "") {
      obj.studentCode = message.studentCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStudentTuitionFeeReq>, I>>(base?: I): GetStudentTuitionFeeReq {
    return GetStudentTuitionFeeReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStudentTuitionFeeReq>, I>>(object: I): GetStudentTuitionFeeReq {
    const message = createBaseGetStudentTuitionFeeReq();
    message.studentCode = object.studentCode ?? "";
    return message;
  },
};

function createBaseGetStudentTuitionFeeRsp(): GetStudentTuitionFeeRsp {
  return { code: 0, message: "", data: undefined };
}

export const GetStudentTuitionFeeRsp = {
  encode(message: GetStudentTuitionFeeRsp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.data !== undefined) {
      GetStudentTuitionFeeRsp_Data.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStudentTuitionFeeRsp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStudentTuitionFeeRsp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = GetStudentTuitionFeeRsp_Data.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStudentTuitionFeeRsp {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: isSet(object.data) ? GetStudentTuitionFeeRsp_Data.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: GetStudentTuitionFeeRsp): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data !== undefined) {
      obj.data = GetStudentTuitionFeeRsp_Data.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStudentTuitionFeeRsp>, I>>(base?: I): GetStudentTuitionFeeRsp {
    return GetStudentTuitionFeeRsp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStudentTuitionFeeRsp>, I>>(object: I): GetStudentTuitionFeeRsp {
    const message = createBaseGetStudentTuitionFeeRsp();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.data = (object.data !== undefined && object.data !== null)
      ? GetStudentTuitionFeeRsp_Data.fromPartial(object.data)
      : undefined;
    return message;
  },
};

function createBaseGetStudentTuitionFeeRsp_TuitionInfo(): GetStudentTuitionFeeRsp_TuitionInfo {
  return { paidAmount: 0, dueAmount: 0, dueTotalAmount: 0 };
}

export const GetStudentTuitionFeeRsp_TuitionInfo = {
  encode(message: GetStudentTuitionFeeRsp_TuitionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paidAmount !== 0) {
      writer.uint32(8).uint32(message.paidAmount);
    }
    if (message.dueAmount !== 0) {
      writer.uint32(16).uint32(message.dueAmount);
    }
    if (message.dueTotalAmount !== 0) {
      writer.uint32(24).uint32(message.dueTotalAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStudentTuitionFeeRsp_TuitionInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStudentTuitionFeeRsp_TuitionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.paidAmount = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.dueAmount = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.dueTotalAmount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStudentTuitionFeeRsp_TuitionInfo {
    return {
      paidAmount: isSet(object.paidAmount) ? globalThis.Number(object.paidAmount) : 0,
      dueAmount: isSet(object.dueAmount) ? globalThis.Number(object.dueAmount) : 0,
      dueTotalAmount: isSet(object.dueTotalAmount) ? globalThis.Number(object.dueTotalAmount) : 0,
    };
  },

  toJSON(message: GetStudentTuitionFeeRsp_TuitionInfo): unknown {
    const obj: any = {};
    if (message.paidAmount !== 0) {
      obj.paidAmount = Math.round(message.paidAmount);
    }
    if (message.dueAmount !== 0) {
      obj.dueAmount = Math.round(message.dueAmount);
    }
    if (message.dueTotalAmount !== 0) {
      obj.dueTotalAmount = Math.round(message.dueTotalAmount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStudentTuitionFeeRsp_TuitionInfo>, I>>(
    base?: I,
  ): GetStudentTuitionFeeRsp_TuitionInfo {
    return GetStudentTuitionFeeRsp_TuitionInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStudentTuitionFeeRsp_TuitionInfo>, I>>(
    object: I,
  ): GetStudentTuitionFeeRsp_TuitionInfo {
    const message = createBaseGetStudentTuitionFeeRsp_TuitionInfo();
    message.paidAmount = object.paidAmount ?? 0;
    message.dueAmount = object.dueAmount ?? 0;
    message.dueTotalAmount = object.dueTotalAmount ?? 0;
    return message;
  },
};

function createBaseGetStudentTuitionFeeRsp_PaidDetail(): GetStudentTuitionFeeRsp_PaidDetail {
  return { type: "", description: "", date: "", amount: 0 };
}

export const GetStudentTuitionFeeRsp_PaidDetail = {
  encode(message: GetStudentTuitionFeeRsp_PaidDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.date !== "") {
      writer.uint32(26).string(message.date);
    }
    if (message.amount !== 0) {
      writer.uint32(32).uint32(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStudentTuitionFeeRsp_PaidDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStudentTuitionFeeRsp_PaidDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.date = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStudentTuitionFeeRsp_PaidDetail {
    return {
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      date: isSet(object.date) ? globalThis.String(object.date) : "",
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
    };
  },

  toJSON(message: GetStudentTuitionFeeRsp_PaidDetail): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.date !== "") {
      obj.date = message.date;
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStudentTuitionFeeRsp_PaidDetail>, I>>(
    base?: I,
  ): GetStudentTuitionFeeRsp_PaidDetail {
    return GetStudentTuitionFeeRsp_PaidDetail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStudentTuitionFeeRsp_PaidDetail>, I>>(
    object: I,
  ): GetStudentTuitionFeeRsp_PaidDetail {
    const message = createBaseGetStudentTuitionFeeRsp_PaidDetail();
    message.type = object.type ?? "";
    message.description = object.description ?? "";
    message.date = object.date ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseGetStudentTuitionFeeRsp_DueDetail(): GetStudentTuitionFeeRsp_DueDetail {
  return { type: "", semester: "", amount: 0, dueAmount: undefined };
}

export const GetStudentTuitionFeeRsp_DueDetail = {
  encode(message: GetStudentTuitionFeeRsp_DueDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.semester !== "") {
      writer.uint32(18).string(message.semester);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint32(message.amount);
    }
    if (message.dueAmount !== undefined) {
      writer.uint32(32).uint32(message.dueAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStudentTuitionFeeRsp_DueDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStudentTuitionFeeRsp_DueDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.semester = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.dueAmount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStudentTuitionFeeRsp_DueDetail {
    return {
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      semester: isSet(object.semester) ? globalThis.String(object.semester) : "",
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      dueAmount: isSet(object.dueAmount) ? globalThis.Number(object.dueAmount) : undefined,
    };
  },

  toJSON(message: GetStudentTuitionFeeRsp_DueDetail): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.semester !== "") {
      obj.semester = message.semester;
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    if (message.dueAmount !== undefined) {
      obj.dueAmount = Math.round(message.dueAmount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStudentTuitionFeeRsp_DueDetail>, I>>(
    base?: I,
  ): GetStudentTuitionFeeRsp_DueDetail {
    return GetStudentTuitionFeeRsp_DueDetail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStudentTuitionFeeRsp_DueDetail>, I>>(
    object: I,
  ): GetStudentTuitionFeeRsp_DueDetail {
    const message = createBaseGetStudentTuitionFeeRsp_DueDetail();
    message.type = object.type ?? "";
    message.semester = object.semester ?? "";
    message.amount = object.amount ?? 0;
    message.dueAmount = object.dueAmount ?? undefined;
    return message;
  },
};

function createBaseGetStudentTuitionFeeRsp_DueTotalDetail(): GetStudentTuitionFeeRsp_DueTotalDetail {
  return {
    type: "",
    semester: "",
    numOfCredit: "",
    discount: "",
    resitCourse: "",
    upScore: "",
    amount: 0,
    dueAmount: 0,
  };
}

export const GetStudentTuitionFeeRsp_DueTotalDetail = {
  encode(message: GetStudentTuitionFeeRsp_DueTotalDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.semester !== "") {
      writer.uint32(18).string(message.semester);
    }
    if (message.numOfCredit !== "") {
      writer.uint32(26).string(message.numOfCredit);
    }
    if (message.discount !== "") {
      writer.uint32(34).string(message.discount);
    }
    if (message.resitCourse !== "") {
      writer.uint32(42).string(message.resitCourse);
    }
    if (message.upScore !== "") {
      writer.uint32(50).string(message.upScore);
    }
    if (message.amount !== 0) {
      writer.uint32(56).uint32(message.amount);
    }
    if (message.dueAmount !== 0) {
      writer.uint32(64).uint32(message.dueAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStudentTuitionFeeRsp_DueTotalDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStudentTuitionFeeRsp_DueTotalDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.semester = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.numOfCredit = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.discount = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resitCourse = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.upScore = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.amount = reader.uint32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.dueAmount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStudentTuitionFeeRsp_DueTotalDetail {
    return {
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      semester: isSet(object.semester) ? globalThis.String(object.semester) : "",
      numOfCredit: isSet(object.numOfCredit) ? globalThis.String(object.numOfCredit) : "",
      discount: isSet(object.discount) ? globalThis.String(object.discount) : "",
      resitCourse: isSet(object.resitCourse) ? globalThis.String(object.resitCourse) : "",
      upScore: isSet(object.upScore) ? globalThis.String(object.upScore) : "",
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      dueAmount: isSet(object.dueAmount) ? globalThis.Number(object.dueAmount) : 0,
    };
  },

  toJSON(message: GetStudentTuitionFeeRsp_DueTotalDetail): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.semester !== "") {
      obj.semester = message.semester;
    }
    if (message.numOfCredit !== "") {
      obj.numOfCredit = message.numOfCredit;
    }
    if (message.discount !== "") {
      obj.discount = message.discount;
    }
    if (message.resitCourse !== "") {
      obj.resitCourse = message.resitCourse;
    }
    if (message.upScore !== "") {
      obj.upScore = message.upScore;
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    if (message.dueAmount !== 0) {
      obj.dueAmount = Math.round(message.dueAmount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStudentTuitionFeeRsp_DueTotalDetail>, I>>(
    base?: I,
  ): GetStudentTuitionFeeRsp_DueTotalDetail {
    return GetStudentTuitionFeeRsp_DueTotalDetail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStudentTuitionFeeRsp_DueTotalDetail>, I>>(
    object: I,
  ): GetStudentTuitionFeeRsp_DueTotalDetail {
    const message = createBaseGetStudentTuitionFeeRsp_DueTotalDetail();
    message.type = object.type ?? "";
    message.semester = object.semester ?? "";
    message.numOfCredit = object.numOfCredit ?? "";
    message.discount = object.discount ?? "";
    message.resitCourse = object.resitCourse ?? "";
    message.upScore = object.upScore ?? "";
    message.amount = object.amount ?? 0;
    message.dueAmount = object.dueAmount ?? 0;
    return message;
  },
};

function createBaseGetStudentTuitionFeeRsp_TuitionDetail(): GetStudentTuitionFeeRsp_TuitionDetail {
  return { paidDetail: [], dueDetail: [], dueTotalDetail: [] };
}

export const GetStudentTuitionFeeRsp_TuitionDetail = {
  encode(message: GetStudentTuitionFeeRsp_TuitionDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paidDetail) {
      GetStudentTuitionFeeRsp_PaidDetail.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.dueDetail) {
      GetStudentTuitionFeeRsp_DueDetail.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.dueTotalDetail) {
      GetStudentTuitionFeeRsp_DueTotalDetail.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStudentTuitionFeeRsp_TuitionDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStudentTuitionFeeRsp_TuitionDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.paidDetail.push(GetStudentTuitionFeeRsp_PaidDetail.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dueDetail.push(GetStudentTuitionFeeRsp_DueDetail.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dueTotalDetail.push(GetStudentTuitionFeeRsp_DueTotalDetail.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStudentTuitionFeeRsp_TuitionDetail {
    return {
      paidDetail: globalThis.Array.isArray(object?.paidDetail)
        ? object.paidDetail.map((e: any) => GetStudentTuitionFeeRsp_PaidDetail.fromJSON(e))
        : [],
      dueDetail: globalThis.Array.isArray(object?.dueDetail)
        ? object.dueDetail.map((e: any) => GetStudentTuitionFeeRsp_DueDetail.fromJSON(e))
        : [],
      dueTotalDetail: globalThis.Array.isArray(object?.dueTotalDetail)
        ? object.dueTotalDetail.map((e: any) => GetStudentTuitionFeeRsp_DueTotalDetail.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetStudentTuitionFeeRsp_TuitionDetail): unknown {
    const obj: any = {};
    if (message.paidDetail?.length) {
      obj.paidDetail = message.paidDetail.map((e) => GetStudentTuitionFeeRsp_PaidDetail.toJSON(e));
    }
    if (message.dueDetail?.length) {
      obj.dueDetail = message.dueDetail.map((e) => GetStudentTuitionFeeRsp_DueDetail.toJSON(e));
    }
    if (message.dueTotalDetail?.length) {
      obj.dueTotalDetail = message.dueTotalDetail.map((e) => GetStudentTuitionFeeRsp_DueTotalDetail.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStudentTuitionFeeRsp_TuitionDetail>, I>>(
    base?: I,
  ): GetStudentTuitionFeeRsp_TuitionDetail {
    return GetStudentTuitionFeeRsp_TuitionDetail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStudentTuitionFeeRsp_TuitionDetail>, I>>(
    object: I,
  ): GetStudentTuitionFeeRsp_TuitionDetail {
    const message = createBaseGetStudentTuitionFeeRsp_TuitionDetail();
    message.paidDetail = object.paidDetail?.map((e) => GetStudentTuitionFeeRsp_PaidDetail.fromPartial(e)) || [];
    message.dueDetail = object.dueDetail?.map((e) => GetStudentTuitionFeeRsp_DueDetail.fromPartial(e)) || [];
    message.dueTotalDetail = object.dueTotalDetail?.map((e) => GetStudentTuitionFeeRsp_DueTotalDetail.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseGetStudentTuitionFeeRsp_Data(): GetStudentTuitionFeeRsp_Data {
  return { tuitionInfo: undefined, tuitionDetail: undefined };
}

export const GetStudentTuitionFeeRsp_Data = {
  encode(message: GetStudentTuitionFeeRsp_Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tuitionInfo !== undefined) {
      GetStudentTuitionFeeRsp_TuitionInfo.encode(message.tuitionInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.tuitionDetail !== undefined) {
      GetStudentTuitionFeeRsp_TuitionDetail.encode(message.tuitionDetail, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStudentTuitionFeeRsp_Data {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStudentTuitionFeeRsp_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tuitionInfo = GetStudentTuitionFeeRsp_TuitionInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tuitionDetail = GetStudentTuitionFeeRsp_TuitionDetail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStudentTuitionFeeRsp_Data {
    return {
      tuitionInfo: isSet(object.tuitionInfo)
        ? GetStudentTuitionFeeRsp_TuitionInfo.fromJSON(object.tuitionInfo)
        : undefined,
      tuitionDetail: isSet(object.tuitionDetail)
        ? GetStudentTuitionFeeRsp_TuitionDetail.fromJSON(object.tuitionDetail)
        : undefined,
    };
  },

  toJSON(message: GetStudentTuitionFeeRsp_Data): unknown {
    const obj: any = {};
    if (message.tuitionInfo !== undefined) {
      obj.tuitionInfo = GetStudentTuitionFeeRsp_TuitionInfo.toJSON(message.tuitionInfo);
    }
    if (message.tuitionDetail !== undefined) {
      obj.tuitionDetail = GetStudentTuitionFeeRsp_TuitionDetail.toJSON(message.tuitionDetail);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStudentTuitionFeeRsp_Data>, I>>(base?: I): GetStudentTuitionFeeRsp_Data {
    return GetStudentTuitionFeeRsp_Data.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStudentTuitionFeeRsp_Data>, I>>(object: I): GetStudentTuitionFeeRsp_Data {
    const message = createBaseGetStudentTuitionFeeRsp_Data();
    message.tuitionInfo = (object.tuitionInfo !== undefined && object.tuitionInfo !== null)
      ? GetStudentTuitionFeeRsp_TuitionInfo.fromPartial(object.tuitionInfo)
      : undefined;
    message.tuitionDetail = (object.tuitionDetail !== undefined && object.tuitionDetail !== null)
      ? GetStudentTuitionFeeRsp_TuitionDetail.fromPartial(object.tuitionDetail)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
