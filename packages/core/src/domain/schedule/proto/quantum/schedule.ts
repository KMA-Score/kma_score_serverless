/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "com.superkma.quantum";

export interface SemesterData {
  name: string;
  hash: string;
}

export interface GetSemesterListReq {
}

export interface GetSemesterListRsp {
  code: number;
  message: string;
  semesterList: SemesterData[];
}

export interface StudentSchedule {
  day: string;
  subjectCode: string;
  className: string;
  subjectName?: string | undefined;
  teacher?: string | undefined;
  lesson: string;
  room: string;
}

export interface StudentInfo {
  studentCode: string;
  displayName: string;
  studentClass: string;
}

export interface GetScheduleByStudentCodeReq {
  studentCode: string;
  semesterHash: string;
}

export interface GetScheduleByStudentCodeRsp {
  code: number;
  message: string;
  studentInfo: StudentInfo | undefined;
  studentSchedule: StudentSchedule[];
}

function createBaseSemesterData(): SemesterData {
  return { name: "", hash: "" };
}

export const SemesterData = {
  encode(message: SemesterData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SemesterData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSemesterData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hash = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SemesterData {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      hash: isSet(object.hash) ? globalThis.String(object.hash) : "",
    };
  },

  toJSON(message: SemesterData): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.hash !== "") {
      obj.hash = message.hash;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SemesterData>, I>>(base?: I): SemesterData {
    return SemesterData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SemesterData>, I>>(object: I): SemesterData {
    const message = createBaseSemesterData();
    message.name = object.name ?? "";
    message.hash = object.hash ?? "";
    return message;
  },
};

function createBaseGetSemesterListReq(): GetSemesterListReq {
  return {};
}

export const GetSemesterListReq = {
  encode(_: GetSemesterListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSemesterListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSemesterListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetSemesterListReq {
    return {};
  },

  toJSON(_: GetSemesterListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSemesterListReq>, I>>(base?: I): GetSemesterListReq {
    return GetSemesterListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSemesterListReq>, I>>(_: I): GetSemesterListReq {
    const message = createBaseGetSemesterListReq();
    return message;
  },
};

function createBaseGetSemesterListRsp(): GetSemesterListRsp {
  return { code: 0, message: "", semesterList: [] };
}

export const GetSemesterListRsp = {
  encode(message: GetSemesterListRsp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.semesterList) {
      SemesterData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSemesterListRsp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSemesterListRsp();
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

          message.semesterList.push(SemesterData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSemesterListRsp {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      semesterList: globalThis.Array.isArray(object?.semesterList)
        ? object.semesterList.map((e: any) => SemesterData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetSemesterListRsp): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.semesterList?.length) {
      obj.semesterList = message.semesterList.map((e) => SemesterData.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSemesterListRsp>, I>>(base?: I): GetSemesterListRsp {
    return GetSemesterListRsp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSemesterListRsp>, I>>(object: I): GetSemesterListRsp {
    const message = createBaseGetSemesterListRsp();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.semesterList = object.semesterList?.map((e) => SemesterData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStudentSchedule(): StudentSchedule {
  return { day: "", subjectCode: "", className: "", subjectName: undefined, teacher: undefined, lesson: "", room: "" };
}

export const StudentSchedule = {
  encode(message: StudentSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.day !== "") {
      writer.uint32(10).string(message.day);
    }
    if (message.subjectCode !== "") {
      writer.uint32(18).string(message.subjectCode);
    }
    if (message.className !== "") {
      writer.uint32(26).string(message.className);
    }
    if (message.subjectName !== undefined) {
      writer.uint32(34).string(message.subjectName);
    }
    if (message.teacher !== undefined) {
      writer.uint32(42).string(message.teacher);
    }
    if (message.lesson !== "") {
      writer.uint32(50).string(message.lesson);
    }
    if (message.room !== "") {
      writer.uint32(58).string(message.room);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StudentSchedule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStudentSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.day = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subjectCode = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.className = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subjectName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.teacher = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.lesson = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.room = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StudentSchedule {
    return {
      day: isSet(object.day) ? globalThis.String(object.day) : "",
      subjectCode: isSet(object.subjectCode) ? globalThis.String(object.subjectCode) : "",
      className: isSet(object.className) ? globalThis.String(object.className) : "",
      subjectName: isSet(object.subjectName) ? globalThis.String(object.subjectName) : undefined,
      teacher: isSet(object.teacher) ? globalThis.String(object.teacher) : undefined,
      lesson: isSet(object.lesson) ? globalThis.String(object.lesson) : "",
      room: isSet(object.room) ? globalThis.String(object.room) : "",
    };
  },

  toJSON(message: StudentSchedule): unknown {
    const obj: any = {};
    if (message.day !== "") {
      obj.day = message.day;
    }
    if (message.subjectCode !== "") {
      obj.subjectCode = message.subjectCode;
    }
    if (message.className !== "") {
      obj.className = message.className;
    }
    if (message.subjectName !== undefined) {
      obj.subjectName = message.subjectName;
    }
    if (message.teacher !== undefined) {
      obj.teacher = message.teacher;
    }
    if (message.lesson !== "") {
      obj.lesson = message.lesson;
    }
    if (message.room !== "") {
      obj.room = message.room;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StudentSchedule>, I>>(base?: I): StudentSchedule {
    return StudentSchedule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StudentSchedule>, I>>(object: I): StudentSchedule {
    const message = createBaseStudentSchedule();
    message.day = object.day ?? "";
    message.subjectCode = object.subjectCode ?? "";
    message.className = object.className ?? "";
    message.subjectName = object.subjectName ?? undefined;
    message.teacher = object.teacher ?? undefined;
    message.lesson = object.lesson ?? "";
    message.room = object.room ?? "";
    return message;
  },
};

function createBaseStudentInfo(): StudentInfo {
  return { studentCode: "", displayName: "", studentClass: "" };
}

export const StudentInfo = {
  encode(message: StudentInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.studentCode !== "") {
      writer.uint32(10).string(message.studentCode);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.studentClass !== "") {
      writer.uint32(26).string(message.studentClass);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StudentInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStudentInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.studentCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.studentClass = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StudentInfo {
    return {
      studentCode: isSet(object.studentCode) ? globalThis.String(object.studentCode) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      studentClass: isSet(object.studentClass) ? globalThis.String(object.studentClass) : "",
    };
  },

  toJSON(message: StudentInfo): unknown {
    const obj: any = {};
    if (message.studentCode !== "") {
      obj.studentCode = message.studentCode;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.studentClass !== "") {
      obj.studentClass = message.studentClass;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StudentInfo>, I>>(base?: I): StudentInfo {
    return StudentInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StudentInfo>, I>>(object: I): StudentInfo {
    const message = createBaseStudentInfo();
    message.studentCode = object.studentCode ?? "";
    message.displayName = object.displayName ?? "";
    message.studentClass = object.studentClass ?? "";
    return message;
  },
};

function createBaseGetScheduleByStudentCodeReq(): GetScheduleByStudentCodeReq {
  return { studentCode: "", semesterHash: "" };
}

export const GetScheduleByStudentCodeReq = {
  encode(message: GetScheduleByStudentCodeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.studentCode !== "") {
      writer.uint32(10).string(message.studentCode);
    }
    if (message.semesterHash !== "") {
      writer.uint32(18).string(message.semesterHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetScheduleByStudentCodeReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetScheduleByStudentCodeReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.studentCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.semesterHash = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetScheduleByStudentCodeReq {
    return {
      studentCode: isSet(object.studentCode) ? globalThis.String(object.studentCode) : "",
      semesterHash: isSet(object.semesterHash) ? globalThis.String(object.semesterHash) : "",
    };
  },

  toJSON(message: GetScheduleByStudentCodeReq): unknown {
    const obj: any = {};
    if (message.studentCode !== "") {
      obj.studentCode = message.studentCode;
    }
    if (message.semesterHash !== "") {
      obj.semesterHash = message.semesterHash;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetScheduleByStudentCodeReq>, I>>(base?: I): GetScheduleByStudentCodeReq {
    return GetScheduleByStudentCodeReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetScheduleByStudentCodeReq>, I>>(object: I): GetScheduleByStudentCodeReq {
    const message = createBaseGetScheduleByStudentCodeReq();
    message.studentCode = object.studentCode ?? "";
    message.semesterHash = object.semesterHash ?? "";
    return message;
  },
};

function createBaseGetScheduleByStudentCodeRsp(): GetScheduleByStudentCodeRsp {
  return { code: 0, message: "", studentInfo: undefined, studentSchedule: [] };
}

export const GetScheduleByStudentCodeRsp = {
  encode(message: GetScheduleByStudentCodeRsp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.studentInfo !== undefined) {
      StudentInfo.encode(message.studentInfo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.studentSchedule) {
      StudentSchedule.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetScheduleByStudentCodeRsp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetScheduleByStudentCodeRsp();
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

          message.studentInfo = StudentInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.studentSchedule.push(StudentSchedule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetScheduleByStudentCodeRsp {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      studentInfo: isSet(object.studentInfo) ? StudentInfo.fromJSON(object.studentInfo) : undefined,
      studentSchedule: globalThis.Array.isArray(object?.studentSchedule)
        ? object.studentSchedule.map((e: any) => StudentSchedule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetScheduleByStudentCodeRsp): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.studentInfo !== undefined) {
      obj.studentInfo = StudentInfo.toJSON(message.studentInfo);
    }
    if (message.studentSchedule?.length) {
      obj.studentSchedule = message.studentSchedule.map((e) => StudentSchedule.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetScheduleByStudentCodeRsp>, I>>(base?: I): GetScheduleByStudentCodeRsp {
    return GetScheduleByStudentCodeRsp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetScheduleByStudentCodeRsp>, I>>(object: I): GetScheduleByStudentCodeRsp {
    const message = createBaseGetScheduleByStudentCodeRsp();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.studentInfo = (object.studentInfo !== undefined && object.studentInfo !== null)
      ? StudentInfo.fromPartial(object.studentInfo)
      : undefined;
    message.studentSchedule = object.studentSchedule?.map((e) => StudentSchedule.fromPartial(e)) || [];
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
