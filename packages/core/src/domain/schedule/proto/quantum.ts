/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  makeGenericClientConstructor,
  Metadata,
} from '@grpc/grpc-js';
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from '@grpc/grpc-js';
import {
  GetScheduleByStudentCodeReq,
  GetScheduleByStudentCodeRsp,
  GetSemesterListReq,
  GetSemesterListRsp,
} from './quantum/schedule';
import {
  GetStudentTuitionFeeReq,
  GetStudentTuitionFeeRsp,
} from './quantum/student';

export const protobufPackage = 'com.superkma.quantum';

export type KmaQuantumServiceService = typeof KmaQuantumServiceService;
export const KmaQuantumServiceService = {
  getSemesterList: {
    path: '/com.superkma.quantum.KmaQuantumService/GetSemesterList',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSemesterListReq) =>
      Buffer.from(GetSemesterListReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSemesterListReq.decode(value),
    responseSerialize: (value: GetSemesterListRsp) =>
      Buffer.from(GetSemesterListRsp.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetSemesterListRsp.decode(value),
  },
  getScheduleByStudentCode: {
    path: '/com.superkma.quantum.KmaQuantumService/GetScheduleByStudentCode',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetScheduleByStudentCodeReq) =>
      Buffer.from(GetScheduleByStudentCodeReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetScheduleByStudentCodeReq.decode(value),
    responseSerialize: (value: GetScheduleByStudentCodeRsp) =>
      Buffer.from(GetScheduleByStudentCodeRsp.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetScheduleByStudentCodeRsp.decode(value),
  },
  getStudentTuitionFee: {
    path: '/com.superkma.quantum.KmaQuantumService/GetStudentTuitionFee',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetStudentTuitionFeeReq) =>
      Buffer.from(GetStudentTuitionFeeReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetStudentTuitionFeeReq.decode(value),
    responseSerialize: (value: GetStudentTuitionFeeRsp) =>
      Buffer.from(GetStudentTuitionFeeRsp.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetStudentTuitionFeeRsp.decode(value),
  },
} as const;

export interface KmaQuantumServiceServer extends UntypedServiceImplementation {
  getSemesterList: handleUnaryCall<GetSemesterListReq, GetSemesterListRsp>;
  getScheduleByStudentCode: handleUnaryCall<
    GetScheduleByStudentCodeReq,
    GetScheduleByStudentCodeRsp
  >;
  getStudentTuitionFee: handleUnaryCall<
    GetStudentTuitionFeeReq,
    GetStudentTuitionFeeRsp
  >;
}

export interface KmaQuantumServiceClient extends Client {
  getSemesterList(
    request: GetSemesterListReq,
    callback: (
      error: ServiceError | null,
      response: GetSemesterListRsp,
    ) => void,
  ): ClientUnaryCall;
  getSemesterList(
    request: GetSemesterListReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetSemesterListRsp,
    ) => void,
  ): ClientUnaryCall;
  getSemesterList(
    request: GetSemesterListReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetSemesterListRsp,
    ) => void,
  ): ClientUnaryCall;
  getScheduleByStudentCode(
    request: GetScheduleByStudentCodeReq,
    callback: (
      error: ServiceError | null,
      response: GetScheduleByStudentCodeRsp,
    ) => void,
  ): ClientUnaryCall;
  getScheduleByStudentCode(
    request: GetScheduleByStudentCodeReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetScheduleByStudentCodeRsp,
    ) => void,
  ): ClientUnaryCall;
  getScheduleByStudentCode(
    request: GetScheduleByStudentCodeReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetScheduleByStudentCodeRsp,
    ) => void,
  ): ClientUnaryCall;
  getStudentTuitionFee(
    request: GetStudentTuitionFeeReq,
    callback: (
      error: ServiceError | null,
      response: GetStudentTuitionFeeRsp,
    ) => void,
  ): ClientUnaryCall;
  getStudentTuitionFee(
    request: GetStudentTuitionFeeReq,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetStudentTuitionFeeRsp,
    ) => void,
  ): ClientUnaryCall;
  getStudentTuitionFee(
    request: GetStudentTuitionFeeReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetStudentTuitionFeeRsp,
    ) => void,
  ): ClientUnaryCall;
}

export const KmaQuantumServiceClient = makeGenericClientConstructor(
  KmaQuantumServiceService,
  'com.superkma.quantum.KmaQuantumService',
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): KmaQuantumServiceClient;
  service: typeof KmaQuantumServiceService;
  serviceName: string;
};
