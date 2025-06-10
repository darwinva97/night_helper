
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CodeChallenge
 * 
 */
export type CodeChallenge = $Result.DefaultSelection<Prisma.$CodeChallengePayload>
/**
 * Model TestCase
 * 
 */
export type TestCase = $Result.DefaultSelection<Prisma.$TestCasePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Difficult: {
  Easy: 'Easy',
  Medium: 'Medium',
  Hard: 'Hard',
  Chad: 'Chad'
};

export type Difficult = (typeof Difficult)[keyof typeof Difficult]

}

export type Difficult = $Enums.Difficult

export const Difficult: typeof $Enums.Difficult

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CodeChallenges
 * const codeChallenges = await prisma.codeChallenge.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CodeChallenges
   * const codeChallenges = await prisma.codeChallenge.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.codeChallenge`: Exposes CRUD operations for the **CodeChallenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeChallenges
    * const codeChallenges = await prisma.codeChallenge.findMany()
    * ```
    */
  get codeChallenge(): Prisma.CodeChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testCase`: Exposes CRUD operations for the **TestCase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestCases
    * const testCases = await prisma.testCase.findMany()
    * ```
    */
  get testCase(): Prisma.TestCaseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CodeChallenge: 'CodeChallenge',
    TestCase: 'TestCase'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "codeChallenge" | "testCase"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CodeChallenge: {
        payload: Prisma.$CodeChallengePayload<ExtArgs>
        fields: Prisma.CodeChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>
          }
          findFirst: {
            args: Prisma.CodeChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>
          }
          findMany: {
            args: Prisma.CodeChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>[]
          }
          create: {
            args: Prisma.CodeChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>
          }
          createMany: {
            args: Prisma.CodeChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodeChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>[]
          }
          delete: {
            args: Prisma.CodeChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>
          }
          update: {
            args: Prisma.CodeChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>
          }
          deleteMany: {
            args: Prisma.CodeChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodeChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>[]
          }
          upsert: {
            args: Prisma.CodeChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>
          }
          aggregate: {
            args: Prisma.CodeChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodeChallenge>
          }
          groupBy: {
            args: Prisma.CodeChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<CodeChallengeCountAggregateOutputType> | number
          }
        }
      }
      TestCase: {
        payload: Prisma.$TestCasePayload<ExtArgs>
        fields: Prisma.TestCaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestCaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestCaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          findFirst: {
            args: Prisma.TestCaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestCaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          findMany: {
            args: Prisma.TestCaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>[]
          }
          create: {
            args: Prisma.TestCaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          createMany: {
            args: Prisma.TestCaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>[]
          }
          delete: {
            args: Prisma.TestCaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          update: {
            args: Prisma.TestCaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          deleteMany: {
            args: Prisma.TestCaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestCaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestCaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>[]
          }
          upsert: {
            args: Prisma.TestCaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          aggregate: {
            args: Prisma.TestCaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestCase>
          }
          groupBy: {
            args: Prisma.TestCaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestCaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCaseCountArgs<ExtArgs>
            result: $Utils.Optional<TestCaseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    codeChallenge?: CodeChallengeOmit
    testCase?: TestCaseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CodeChallengeCountOutputType
   */

  export type CodeChallengeCountOutputType = {
    TestCase: number
  }

  export type CodeChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TestCase?: boolean | CodeChallengeCountOutputTypeCountTestCaseArgs
  }

  // Custom InputTypes
  /**
   * CodeChallengeCountOutputType without action
   */
  export type CodeChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallengeCountOutputType
     */
    select?: CodeChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CodeChallengeCountOutputType without action
   */
  export type CodeChallengeCountOutputTypeCountTestCaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CodeChallenge
   */

  export type AggregateCodeChallenge = {
    _count: CodeChallengeCountAggregateOutputType | null
    _min: CodeChallengeMinAggregateOutputType | null
    _max: CodeChallengeMaxAggregateOutputType | null
  }

  export type CodeChallengeMinAggregateOutputType = {
    id: string | null
    title: string | null
    codename: string | null
    description: string | null
    difficult: $Enums.Difficult | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CodeChallengeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    codename: string | null
    description: string | null
    difficult: $Enums.Difficult | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CodeChallengeCountAggregateOutputType = {
    id: number
    title: number
    codename: number
    description: number
    difficult: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CodeChallengeMinAggregateInputType = {
    id?: true
    title?: true
    codename?: true
    description?: true
    difficult?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CodeChallengeMaxAggregateInputType = {
    id?: true
    title?: true
    codename?: true
    description?: true
    difficult?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CodeChallengeCountAggregateInputType = {
    id?: true
    title?: true
    codename?: true
    description?: true
    difficult?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CodeChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeChallenge to aggregate.
     */
    where?: CodeChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeChallenges to fetch.
     */
    orderBy?: CodeChallengeOrderByWithRelationInput | CodeChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeChallenges
    **/
    _count?: true | CodeChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeChallengeMaxAggregateInputType
  }

  export type GetCodeChallengeAggregateType<T extends CodeChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeChallenge[P]>
      : GetScalarType<T[P], AggregateCodeChallenge[P]>
  }




  export type CodeChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeChallengeWhereInput
    orderBy?: CodeChallengeOrderByWithAggregationInput | CodeChallengeOrderByWithAggregationInput[]
    by: CodeChallengeScalarFieldEnum[] | CodeChallengeScalarFieldEnum
    having?: CodeChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeChallengeCountAggregateInputType | true
    _min?: CodeChallengeMinAggregateInputType
    _max?: CodeChallengeMaxAggregateInputType
  }

  export type CodeChallengeGroupByOutputType = {
    id: string
    title: string
    codename: string
    description: string
    difficult: $Enums.Difficult
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CodeChallengeCountAggregateOutputType | null
    _min: CodeChallengeMinAggregateOutputType | null
    _max: CodeChallengeMaxAggregateOutputType | null
  }

  type GetCodeChallengeGroupByPayload<T extends CodeChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], CodeChallengeGroupByOutputType[P]>
        }
      >
    >


  export type CodeChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    codename?: boolean
    description?: boolean
    difficult?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    TestCase?: boolean | CodeChallenge$TestCaseArgs<ExtArgs>
    _count?: boolean | CodeChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codeChallenge"]>

  export type CodeChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    codename?: boolean
    description?: boolean
    difficult?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["codeChallenge"]>

  export type CodeChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    codename?: boolean
    description?: boolean
    difficult?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["codeChallenge"]>

  export type CodeChallengeSelectScalar = {
    id?: boolean
    title?: boolean
    codename?: boolean
    description?: boolean
    difficult?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CodeChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "codename" | "description" | "difficult" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["codeChallenge"]>
  export type CodeChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TestCase?: boolean | CodeChallenge$TestCaseArgs<ExtArgs>
    _count?: boolean | CodeChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CodeChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CodeChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CodeChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodeChallenge"
    objects: {
      TestCase: Prisma.$TestCasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      codename: string
      description: string
      difficult: $Enums.Difficult
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["codeChallenge"]>
    composites: {}
  }

  type CodeChallengeGetPayload<S extends boolean | null | undefined | CodeChallengeDefaultArgs> = $Result.GetResult<Prisma.$CodeChallengePayload, S>

  type CodeChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeChallengeCountAggregateInputType | true
    }

  export interface CodeChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodeChallenge'], meta: { name: 'CodeChallenge' } }
    /**
     * Find zero or one CodeChallenge that matches the filter.
     * @param {CodeChallengeFindUniqueArgs} args - Arguments to find a CodeChallenge
     * @example
     * // Get one CodeChallenge
     * const codeChallenge = await prisma.codeChallenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeChallengeFindUniqueArgs>(args: SelectSubset<T, CodeChallengeFindUniqueArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CodeChallenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeChallengeFindUniqueOrThrowArgs} args - Arguments to find a CodeChallenge
     * @example
     * // Get one CodeChallenge
     * const codeChallenge = await prisma.codeChallenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeChallenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeChallengeFindFirstArgs} args - Arguments to find a CodeChallenge
     * @example
     * // Get one CodeChallenge
     * const codeChallenge = await prisma.codeChallenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeChallengeFindFirstArgs>(args?: SelectSubset<T, CodeChallengeFindFirstArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeChallenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeChallengeFindFirstOrThrowArgs} args - Arguments to find a CodeChallenge
     * @example
     * // Get one CodeChallenge
     * const codeChallenge = await prisma.codeChallenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodeChallenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeChallenges
     * const codeChallenges = await prisma.codeChallenge.findMany()
     * 
     * // Get first 10 CodeChallenges
     * const codeChallenges = await prisma.codeChallenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeChallengeWithIdOnly = await prisma.codeChallenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeChallengeFindManyArgs>(args?: SelectSubset<T, CodeChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CodeChallenge.
     * @param {CodeChallengeCreateArgs} args - Arguments to create a CodeChallenge.
     * @example
     * // Create one CodeChallenge
     * const CodeChallenge = await prisma.codeChallenge.create({
     *   data: {
     *     // ... data to create a CodeChallenge
     *   }
     * })
     * 
     */
    create<T extends CodeChallengeCreateArgs>(args: SelectSubset<T, CodeChallengeCreateArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CodeChallenges.
     * @param {CodeChallengeCreateManyArgs} args - Arguments to create many CodeChallenges.
     * @example
     * // Create many CodeChallenges
     * const codeChallenge = await prisma.codeChallenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeChallengeCreateManyArgs>(args?: SelectSubset<T, CodeChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodeChallenges and returns the data saved in the database.
     * @param {CodeChallengeCreateManyAndReturnArgs} args - Arguments to create many CodeChallenges.
     * @example
     * // Create many CodeChallenges
     * const codeChallenge = await prisma.codeChallenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodeChallenges and only return the `id`
     * const codeChallengeWithIdOnly = await prisma.codeChallenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodeChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, CodeChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CodeChallenge.
     * @param {CodeChallengeDeleteArgs} args - Arguments to delete one CodeChallenge.
     * @example
     * // Delete one CodeChallenge
     * const CodeChallenge = await prisma.codeChallenge.delete({
     *   where: {
     *     // ... filter to delete one CodeChallenge
     *   }
     * })
     * 
     */
    delete<T extends CodeChallengeDeleteArgs>(args: SelectSubset<T, CodeChallengeDeleteArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CodeChallenge.
     * @param {CodeChallengeUpdateArgs} args - Arguments to update one CodeChallenge.
     * @example
     * // Update one CodeChallenge
     * const codeChallenge = await prisma.codeChallenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeChallengeUpdateArgs>(args: SelectSubset<T, CodeChallengeUpdateArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CodeChallenges.
     * @param {CodeChallengeDeleteManyArgs} args - Arguments to filter CodeChallenges to delete.
     * @example
     * // Delete a few CodeChallenges
     * const { count } = await prisma.codeChallenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeChallengeDeleteManyArgs>(args?: SelectSubset<T, CodeChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeChallenges
     * const codeChallenge = await prisma.codeChallenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeChallengeUpdateManyArgs>(args: SelectSubset<T, CodeChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeChallenges and returns the data updated in the database.
     * @param {CodeChallengeUpdateManyAndReturnArgs} args - Arguments to update many CodeChallenges.
     * @example
     * // Update many CodeChallenges
     * const codeChallenge = await prisma.codeChallenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CodeChallenges and only return the `id`
     * const codeChallengeWithIdOnly = await prisma.codeChallenge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CodeChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, CodeChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CodeChallenge.
     * @param {CodeChallengeUpsertArgs} args - Arguments to update or create a CodeChallenge.
     * @example
     * // Update or create a CodeChallenge
     * const codeChallenge = await prisma.codeChallenge.upsert({
     *   create: {
     *     // ... data to create a CodeChallenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeChallenge we want to update
     *   }
     * })
     */
    upsert<T extends CodeChallengeUpsertArgs>(args: SelectSubset<T, CodeChallengeUpsertArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CodeChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeChallengeCountArgs} args - Arguments to filter CodeChallenges to count.
     * @example
     * // Count the number of CodeChallenges
     * const count = await prisma.codeChallenge.count({
     *   where: {
     *     // ... the filter for the CodeChallenges we want to count
     *   }
     * })
    **/
    count<T extends CodeChallengeCountArgs>(
      args?: Subset<T, CodeChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CodeChallengeAggregateArgs>(args: Subset<T, CodeChallengeAggregateArgs>): Prisma.PrismaPromise<GetCodeChallengeAggregateType<T>>

    /**
     * Group by CodeChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeChallengeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CodeChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeChallengeGroupByArgs['orderBy'] }
        : { orderBy?: CodeChallengeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CodeChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodeChallenge model
   */
  readonly fields: CodeChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeChallenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TestCase<T extends CodeChallenge$TestCaseArgs<ExtArgs> = {}>(args?: Subset<T, CodeChallenge$TestCaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CodeChallenge model
   */
  interface CodeChallengeFieldRefs {
    readonly id: FieldRef<"CodeChallenge", 'String'>
    readonly title: FieldRef<"CodeChallenge", 'String'>
    readonly codename: FieldRef<"CodeChallenge", 'String'>
    readonly description: FieldRef<"CodeChallenge", 'String'>
    readonly difficult: FieldRef<"CodeChallenge", 'Difficult'>
    readonly deletedAt: FieldRef<"CodeChallenge", 'DateTime'>
    readonly createdAt: FieldRef<"CodeChallenge", 'DateTime'>
    readonly updatedAt: FieldRef<"CodeChallenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CodeChallenge findUnique
   */
  export type CodeChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CodeChallenge to fetch.
     */
    where: CodeChallengeWhereUniqueInput
  }

  /**
   * CodeChallenge findUniqueOrThrow
   */
  export type CodeChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CodeChallenge to fetch.
     */
    where: CodeChallengeWhereUniqueInput
  }

  /**
   * CodeChallenge findFirst
   */
  export type CodeChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CodeChallenge to fetch.
     */
    where?: CodeChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeChallenges to fetch.
     */
    orderBy?: CodeChallengeOrderByWithRelationInput | CodeChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeChallenges.
     */
    cursor?: CodeChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeChallenges.
     */
    distinct?: CodeChallengeScalarFieldEnum | CodeChallengeScalarFieldEnum[]
  }

  /**
   * CodeChallenge findFirstOrThrow
   */
  export type CodeChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CodeChallenge to fetch.
     */
    where?: CodeChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeChallenges to fetch.
     */
    orderBy?: CodeChallengeOrderByWithRelationInput | CodeChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeChallenges.
     */
    cursor?: CodeChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeChallenges.
     */
    distinct?: CodeChallengeScalarFieldEnum | CodeChallengeScalarFieldEnum[]
  }

  /**
   * CodeChallenge findMany
   */
  export type CodeChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CodeChallenges to fetch.
     */
    where?: CodeChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeChallenges to fetch.
     */
    orderBy?: CodeChallengeOrderByWithRelationInput | CodeChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeChallenges.
     */
    cursor?: CodeChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeChallenges.
     */
    skip?: number
    distinct?: CodeChallengeScalarFieldEnum | CodeChallengeScalarFieldEnum[]
  }

  /**
   * CodeChallenge create
   */
  export type CodeChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a CodeChallenge.
     */
    data: XOR<CodeChallengeCreateInput, CodeChallengeUncheckedCreateInput>
  }

  /**
   * CodeChallenge createMany
   */
  export type CodeChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodeChallenges.
     */
    data: CodeChallengeCreateManyInput | CodeChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodeChallenge createManyAndReturn
   */
  export type CodeChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many CodeChallenges.
     */
    data: CodeChallengeCreateManyInput | CodeChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodeChallenge update
   */
  export type CodeChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a CodeChallenge.
     */
    data: XOR<CodeChallengeUpdateInput, CodeChallengeUncheckedUpdateInput>
    /**
     * Choose, which CodeChallenge to update.
     */
    where: CodeChallengeWhereUniqueInput
  }

  /**
   * CodeChallenge updateMany
   */
  export type CodeChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodeChallenges.
     */
    data: XOR<CodeChallengeUpdateManyMutationInput, CodeChallengeUncheckedUpdateManyInput>
    /**
     * Filter which CodeChallenges to update
     */
    where?: CodeChallengeWhereInput
    /**
     * Limit how many CodeChallenges to update.
     */
    limit?: number
  }

  /**
   * CodeChallenge updateManyAndReturn
   */
  export type CodeChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * The data used to update CodeChallenges.
     */
    data: XOR<CodeChallengeUpdateManyMutationInput, CodeChallengeUncheckedUpdateManyInput>
    /**
     * Filter which CodeChallenges to update
     */
    where?: CodeChallengeWhereInput
    /**
     * Limit how many CodeChallenges to update.
     */
    limit?: number
  }

  /**
   * CodeChallenge upsert
   */
  export type CodeChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the CodeChallenge to update in case it exists.
     */
    where: CodeChallengeWhereUniqueInput
    /**
     * In case the CodeChallenge found by the `where` argument doesn't exist, create a new CodeChallenge with this data.
     */
    create: XOR<CodeChallengeCreateInput, CodeChallengeUncheckedCreateInput>
    /**
     * In case the CodeChallenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeChallengeUpdateInput, CodeChallengeUncheckedUpdateInput>
  }

  /**
   * CodeChallenge delete
   */
  export type CodeChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * Filter which CodeChallenge to delete.
     */
    where: CodeChallengeWhereUniqueInput
  }

  /**
   * CodeChallenge deleteMany
   */
  export type CodeChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeChallenges to delete
     */
    where?: CodeChallengeWhereInput
    /**
     * Limit how many CodeChallenges to delete.
     */
    limit?: number
  }

  /**
   * CodeChallenge.TestCase
   */
  export type CodeChallenge$TestCaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    where?: TestCaseWhereInput
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    cursor?: TestCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * CodeChallenge without action
   */
  export type CodeChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
  }


  /**
   * Model TestCase
   */

  export type AggregateTestCase = {
    _count: TestCaseCountAggregateOutputType | null
    _min: TestCaseMinAggregateOutputType | null
    _max: TestCaseMaxAggregateOutputType | null
  }

  export type TestCaseMinAggregateOutputType = {
    id: string | null
    args: string | null
    expectedOutput: string | null
    codeChallengeId: string | null
    deletedAt: Date | null
  }

  export type TestCaseMaxAggregateOutputType = {
    id: string | null
    args: string | null
    expectedOutput: string | null
    codeChallengeId: string | null
    deletedAt: Date | null
  }

  export type TestCaseCountAggregateOutputType = {
    id: number
    args: number
    expectedOutput: number
    codeChallengeId: number
    deletedAt: number
    _all: number
  }


  export type TestCaseMinAggregateInputType = {
    id?: true
    args?: true
    expectedOutput?: true
    codeChallengeId?: true
    deletedAt?: true
  }

  export type TestCaseMaxAggregateInputType = {
    id?: true
    args?: true
    expectedOutput?: true
    codeChallengeId?: true
    deletedAt?: true
  }

  export type TestCaseCountAggregateInputType = {
    id?: true
    args?: true
    expectedOutput?: true
    codeChallengeId?: true
    deletedAt?: true
    _all?: true
  }

  export type TestCaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCase to aggregate.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestCases
    **/
    _count?: true | TestCaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestCaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestCaseMaxAggregateInputType
  }

  export type GetTestCaseAggregateType<T extends TestCaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTestCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestCase[P]>
      : GetScalarType<T[P], AggregateTestCase[P]>
  }




  export type TestCaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseWhereInput
    orderBy?: TestCaseOrderByWithAggregationInput | TestCaseOrderByWithAggregationInput[]
    by: TestCaseScalarFieldEnum[] | TestCaseScalarFieldEnum
    having?: TestCaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCaseCountAggregateInputType | true
    _min?: TestCaseMinAggregateInputType
    _max?: TestCaseMaxAggregateInputType
  }

  export type TestCaseGroupByOutputType = {
    id: string
    args: string
    expectedOutput: string
    codeChallengeId: string
    deletedAt: Date | null
    _count: TestCaseCountAggregateOutputType | null
    _min: TestCaseMinAggregateOutputType | null
    _max: TestCaseMaxAggregateOutputType | null
  }

  type GetTestCaseGroupByPayload<T extends TestCaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestCaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestCaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestCaseGroupByOutputType[P]>
            : GetScalarType<T[P], TestCaseGroupByOutputType[P]>
        }
      >
    >


  export type TestCaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    args?: boolean
    expectedOutput?: boolean
    codeChallengeId?: boolean
    deletedAt?: boolean
    codeChallenge?: boolean | CodeChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCase"]>

  export type TestCaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    args?: boolean
    expectedOutput?: boolean
    codeChallengeId?: boolean
    deletedAt?: boolean
    codeChallenge?: boolean | CodeChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCase"]>

  export type TestCaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    args?: boolean
    expectedOutput?: boolean
    codeChallengeId?: boolean
    deletedAt?: boolean
    codeChallenge?: boolean | CodeChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCase"]>

  export type TestCaseSelectScalar = {
    id?: boolean
    args?: boolean
    expectedOutput?: boolean
    codeChallengeId?: boolean
    deletedAt?: boolean
  }

  export type TestCaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "args" | "expectedOutput" | "codeChallengeId" | "deletedAt", ExtArgs["result"]["testCase"]>
  export type TestCaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codeChallenge?: boolean | CodeChallengeDefaultArgs<ExtArgs>
  }
  export type TestCaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codeChallenge?: boolean | CodeChallengeDefaultArgs<ExtArgs>
  }
  export type TestCaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codeChallenge?: boolean | CodeChallengeDefaultArgs<ExtArgs>
  }

  export type $TestCasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestCase"
    objects: {
      codeChallenge: Prisma.$CodeChallengePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      args: string
      expectedOutput: string
      codeChallengeId: string
      deletedAt: Date | null
    }, ExtArgs["result"]["testCase"]>
    composites: {}
  }

  type TestCaseGetPayload<S extends boolean | null | undefined | TestCaseDefaultArgs> = $Result.GetResult<Prisma.$TestCasePayload, S>

  type TestCaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestCaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCaseCountAggregateInputType | true
    }

  export interface TestCaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestCase'], meta: { name: 'TestCase' } }
    /**
     * Find zero or one TestCase that matches the filter.
     * @param {TestCaseFindUniqueArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestCaseFindUniqueArgs>(args: SelectSubset<T, TestCaseFindUniqueArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestCase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestCaseFindUniqueOrThrowArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestCaseFindUniqueOrThrowArgs>(args: SelectSubset<T, TestCaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindFirstArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestCaseFindFirstArgs>(args?: SelectSubset<T, TestCaseFindFirstArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindFirstOrThrowArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestCaseFindFirstOrThrowArgs>(args?: SelectSubset<T, TestCaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestCases
     * const testCases = await prisma.testCase.findMany()
     * 
     * // Get first 10 TestCases
     * const testCases = await prisma.testCase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testCaseWithIdOnly = await prisma.testCase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestCaseFindManyArgs>(args?: SelectSubset<T, TestCaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestCase.
     * @param {TestCaseCreateArgs} args - Arguments to create a TestCase.
     * @example
     * // Create one TestCase
     * const TestCase = await prisma.testCase.create({
     *   data: {
     *     // ... data to create a TestCase
     *   }
     * })
     * 
     */
    create<T extends TestCaseCreateArgs>(args: SelectSubset<T, TestCaseCreateArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestCases.
     * @param {TestCaseCreateManyArgs} args - Arguments to create many TestCases.
     * @example
     * // Create many TestCases
     * const testCase = await prisma.testCase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCaseCreateManyArgs>(args?: SelectSubset<T, TestCaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestCases and returns the data saved in the database.
     * @param {TestCaseCreateManyAndReturnArgs} args - Arguments to create many TestCases.
     * @example
     * // Create many TestCases
     * const testCase = await prisma.testCase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestCases and only return the `id`
     * const testCaseWithIdOnly = await prisma.testCase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCaseCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestCase.
     * @param {TestCaseDeleteArgs} args - Arguments to delete one TestCase.
     * @example
     * // Delete one TestCase
     * const TestCase = await prisma.testCase.delete({
     *   where: {
     *     // ... filter to delete one TestCase
     *   }
     * })
     * 
     */
    delete<T extends TestCaseDeleteArgs>(args: SelectSubset<T, TestCaseDeleteArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestCase.
     * @param {TestCaseUpdateArgs} args - Arguments to update one TestCase.
     * @example
     * // Update one TestCase
     * const testCase = await prisma.testCase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestCaseUpdateArgs>(args: SelectSubset<T, TestCaseUpdateArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestCases.
     * @param {TestCaseDeleteManyArgs} args - Arguments to filter TestCases to delete.
     * @example
     * // Delete a few TestCases
     * const { count } = await prisma.testCase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestCaseDeleteManyArgs>(args?: SelectSubset<T, TestCaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestCases
     * const testCase = await prisma.testCase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestCaseUpdateManyArgs>(args: SelectSubset<T, TestCaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCases and returns the data updated in the database.
     * @param {TestCaseUpdateManyAndReturnArgs} args - Arguments to update many TestCases.
     * @example
     * // Update many TestCases
     * const testCase = await prisma.testCase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestCases and only return the `id`
     * const testCaseWithIdOnly = await prisma.testCase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestCaseUpdateManyAndReturnArgs>(args: SelectSubset<T, TestCaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestCase.
     * @param {TestCaseUpsertArgs} args - Arguments to update or create a TestCase.
     * @example
     * // Update or create a TestCase
     * const testCase = await prisma.testCase.upsert({
     *   create: {
     *     // ... data to create a TestCase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestCase we want to update
     *   }
     * })
     */
    upsert<T extends TestCaseUpsertArgs>(args: SelectSubset<T, TestCaseUpsertArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseCountArgs} args - Arguments to filter TestCases to count.
     * @example
     * // Count the number of TestCases
     * const count = await prisma.testCase.count({
     *   where: {
     *     // ... the filter for the TestCases we want to count
     *   }
     * })
    **/
    count<T extends TestCaseCountArgs>(
      args?: Subset<T, TestCaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestCaseAggregateArgs>(args: Subset<T, TestCaseAggregateArgs>): Prisma.PrismaPromise<GetTestCaseAggregateType<T>>

    /**
     * Group by TestCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestCaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestCaseGroupByArgs['orderBy'] }
        : { orderBy?: TestCaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestCaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestCase model
   */
  readonly fields: TestCaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestCase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestCaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    codeChallenge<T extends CodeChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CodeChallengeDefaultArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestCase model
   */
  interface TestCaseFieldRefs {
    readonly id: FieldRef<"TestCase", 'String'>
    readonly args: FieldRef<"TestCase", 'String'>
    readonly expectedOutput: FieldRef<"TestCase", 'String'>
    readonly codeChallengeId: FieldRef<"TestCase", 'String'>
    readonly deletedAt: FieldRef<"TestCase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestCase findUnique
   */
  export type TestCaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase findUniqueOrThrow
   */
  export type TestCaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase findFirst
   */
  export type TestCaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCases.
     */
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase findFirstOrThrow
   */
  export type TestCaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCases.
     */
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase findMany
   */
  export type TestCaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCases to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase create
   */
  export type TestCaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The data needed to create a TestCase.
     */
    data: XOR<TestCaseCreateInput, TestCaseUncheckedCreateInput>
  }

  /**
   * TestCase createMany
   */
  export type TestCaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestCases.
     */
    data: TestCaseCreateManyInput | TestCaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestCase createManyAndReturn
   */
  export type TestCaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * The data used to create many TestCases.
     */
    data: TestCaseCreateManyInput | TestCaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCase update
   */
  export type TestCaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The data needed to update a TestCase.
     */
    data: XOR<TestCaseUpdateInput, TestCaseUncheckedUpdateInput>
    /**
     * Choose, which TestCase to update.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase updateMany
   */
  export type TestCaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestCases.
     */
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyInput>
    /**
     * Filter which TestCases to update
     */
    where?: TestCaseWhereInput
    /**
     * Limit how many TestCases to update.
     */
    limit?: number
  }

  /**
   * TestCase updateManyAndReturn
   */
  export type TestCaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * The data used to update TestCases.
     */
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyInput>
    /**
     * Filter which TestCases to update
     */
    where?: TestCaseWhereInput
    /**
     * Limit how many TestCases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCase upsert
   */
  export type TestCaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The filter to search for the TestCase to update in case it exists.
     */
    where: TestCaseWhereUniqueInput
    /**
     * In case the TestCase found by the `where` argument doesn't exist, create a new TestCase with this data.
     */
    create: XOR<TestCaseCreateInput, TestCaseUncheckedCreateInput>
    /**
     * In case the TestCase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestCaseUpdateInput, TestCaseUncheckedUpdateInput>
  }

  /**
   * TestCase delete
   */
  export type TestCaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter which TestCase to delete.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase deleteMany
   */
  export type TestCaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCases to delete
     */
    where?: TestCaseWhereInput
    /**
     * Limit how many TestCases to delete.
     */
    limit?: number
  }

  /**
   * TestCase without action
   */
  export type TestCaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CodeChallengeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    codename: 'codename',
    description: 'description',
    difficult: 'difficult',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CodeChallengeScalarFieldEnum = (typeof CodeChallengeScalarFieldEnum)[keyof typeof CodeChallengeScalarFieldEnum]


  export const TestCaseScalarFieldEnum: {
    id: 'id',
    args: 'args',
    expectedOutput: 'expectedOutput',
    codeChallengeId: 'codeChallengeId',
    deletedAt: 'deletedAt'
  };

  export type TestCaseScalarFieldEnum = (typeof TestCaseScalarFieldEnum)[keyof typeof TestCaseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Difficult'
   */
  export type EnumDifficultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficult'>
    


  /**
   * Reference to a field of type 'Difficult[]'
   */
  export type ListEnumDifficultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficult[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CodeChallengeWhereInput = {
    AND?: CodeChallengeWhereInput | CodeChallengeWhereInput[]
    OR?: CodeChallengeWhereInput[]
    NOT?: CodeChallengeWhereInput | CodeChallengeWhereInput[]
    id?: StringFilter<"CodeChallenge"> | string
    title?: StringFilter<"CodeChallenge"> | string
    codename?: StringFilter<"CodeChallenge"> | string
    description?: StringFilter<"CodeChallenge"> | string
    difficult?: EnumDifficultFilter<"CodeChallenge"> | $Enums.Difficult
    deletedAt?: DateTimeNullableFilter<"CodeChallenge"> | Date | string | null
    createdAt?: DateTimeFilter<"CodeChallenge"> | Date | string
    updatedAt?: DateTimeFilter<"CodeChallenge"> | Date | string
    TestCase?: TestCaseListRelationFilter
  }

  export type CodeChallengeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    codename?: SortOrder
    description?: SortOrder
    difficult?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    TestCase?: TestCaseOrderByRelationAggregateInput
  }

  export type CodeChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codename?: string
    AND?: CodeChallengeWhereInput | CodeChallengeWhereInput[]
    OR?: CodeChallengeWhereInput[]
    NOT?: CodeChallengeWhereInput | CodeChallengeWhereInput[]
    title?: StringFilter<"CodeChallenge"> | string
    description?: StringFilter<"CodeChallenge"> | string
    difficult?: EnumDifficultFilter<"CodeChallenge"> | $Enums.Difficult
    deletedAt?: DateTimeNullableFilter<"CodeChallenge"> | Date | string | null
    createdAt?: DateTimeFilter<"CodeChallenge"> | Date | string
    updatedAt?: DateTimeFilter<"CodeChallenge"> | Date | string
    TestCase?: TestCaseListRelationFilter
  }, "id" | "codename">

  export type CodeChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    codename?: SortOrder
    description?: SortOrder
    difficult?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CodeChallengeCountOrderByAggregateInput
    _max?: CodeChallengeMaxOrderByAggregateInput
    _min?: CodeChallengeMinOrderByAggregateInput
  }

  export type CodeChallengeScalarWhereWithAggregatesInput = {
    AND?: CodeChallengeScalarWhereWithAggregatesInput | CodeChallengeScalarWhereWithAggregatesInput[]
    OR?: CodeChallengeScalarWhereWithAggregatesInput[]
    NOT?: CodeChallengeScalarWhereWithAggregatesInput | CodeChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CodeChallenge"> | string
    title?: StringWithAggregatesFilter<"CodeChallenge"> | string
    codename?: StringWithAggregatesFilter<"CodeChallenge"> | string
    description?: StringWithAggregatesFilter<"CodeChallenge"> | string
    difficult?: EnumDifficultWithAggregatesFilter<"CodeChallenge"> | $Enums.Difficult
    deletedAt?: DateTimeNullableWithAggregatesFilter<"CodeChallenge"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CodeChallenge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CodeChallenge"> | Date | string
  }

  export type TestCaseWhereInput = {
    AND?: TestCaseWhereInput | TestCaseWhereInput[]
    OR?: TestCaseWhereInput[]
    NOT?: TestCaseWhereInput | TestCaseWhereInput[]
    id?: StringFilter<"TestCase"> | string
    args?: StringFilter<"TestCase"> | string
    expectedOutput?: StringFilter<"TestCase"> | string
    codeChallengeId?: StringFilter<"TestCase"> | string
    deletedAt?: DateTimeNullableFilter<"TestCase"> | Date | string | null
    codeChallenge?: XOR<CodeChallengeScalarRelationFilter, CodeChallengeWhereInput>
  }

  export type TestCaseOrderByWithRelationInput = {
    id?: SortOrder
    args?: SortOrder
    expectedOutput?: SortOrder
    codeChallengeId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    codeChallenge?: CodeChallengeOrderByWithRelationInput
  }

  export type TestCaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestCaseWhereInput | TestCaseWhereInput[]
    OR?: TestCaseWhereInput[]
    NOT?: TestCaseWhereInput | TestCaseWhereInput[]
    args?: StringFilter<"TestCase"> | string
    expectedOutput?: StringFilter<"TestCase"> | string
    codeChallengeId?: StringFilter<"TestCase"> | string
    deletedAt?: DateTimeNullableFilter<"TestCase"> | Date | string | null
    codeChallenge?: XOR<CodeChallengeScalarRelationFilter, CodeChallengeWhereInput>
  }, "id">

  export type TestCaseOrderByWithAggregationInput = {
    id?: SortOrder
    args?: SortOrder
    expectedOutput?: SortOrder
    codeChallengeId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TestCaseCountOrderByAggregateInput
    _max?: TestCaseMaxOrderByAggregateInput
    _min?: TestCaseMinOrderByAggregateInput
  }

  export type TestCaseScalarWhereWithAggregatesInput = {
    AND?: TestCaseScalarWhereWithAggregatesInput | TestCaseScalarWhereWithAggregatesInput[]
    OR?: TestCaseScalarWhereWithAggregatesInput[]
    NOT?: TestCaseScalarWhereWithAggregatesInput | TestCaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestCase"> | string
    args?: StringWithAggregatesFilter<"TestCase"> | string
    expectedOutput?: StringWithAggregatesFilter<"TestCase"> | string
    codeChallengeId?: StringWithAggregatesFilter<"TestCase"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TestCase"> | Date | string | null
  }

  export type CodeChallengeCreateInput = {
    id?: string
    title: string
    codename: string
    description: string
    difficult: $Enums.Difficult
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    TestCase?: TestCaseCreateNestedManyWithoutCodeChallengeInput
  }

  export type CodeChallengeUncheckedCreateInput = {
    id?: string
    title: string
    codename: string
    description: string
    difficult: $Enums.Difficult
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    TestCase?: TestCaseUncheckedCreateNestedManyWithoutCodeChallengeInput
  }

  export type CodeChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficult?: EnumDifficultFieldUpdateOperationsInput | $Enums.Difficult
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TestCase?: TestCaseUpdateManyWithoutCodeChallengeNestedInput
  }

  export type CodeChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficult?: EnumDifficultFieldUpdateOperationsInput | $Enums.Difficult
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TestCase?: TestCaseUncheckedUpdateManyWithoutCodeChallengeNestedInput
  }

  export type CodeChallengeCreateManyInput = {
    id?: string
    title: string
    codename: string
    description: string
    difficult: $Enums.Difficult
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficult?: EnumDifficultFieldUpdateOperationsInput | $Enums.Difficult
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficult?: EnumDifficultFieldUpdateOperationsInput | $Enums.Difficult
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseCreateInput = {
    id?: string
    args: string
    expectedOutput: string
    deletedAt?: Date | string | null
    codeChallenge: CodeChallengeCreateNestedOneWithoutTestCaseInput
  }

  export type TestCaseUncheckedCreateInput = {
    id?: string
    args: string
    expectedOutput: string
    codeChallengeId: string
    deletedAt?: Date | string | null
  }

  export type TestCaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    args?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeChallenge?: CodeChallengeUpdateOneRequiredWithoutTestCaseNestedInput
  }

  export type TestCaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    args?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    codeChallengeId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestCaseCreateManyInput = {
    id?: string
    args: string
    expectedOutput: string
    codeChallengeId: string
    deletedAt?: Date | string | null
  }

  export type TestCaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    args?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestCaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    args?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    codeChallengeId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumDifficultFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficult | EnumDifficultFieldRefInput<$PrismaModel>
    in?: $Enums.Difficult[] | ListEnumDifficultFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficult[] | ListEnumDifficultFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultFilter<$PrismaModel> | $Enums.Difficult
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TestCaseListRelationFilter = {
    every?: TestCaseWhereInput
    some?: TestCaseWhereInput
    none?: TestCaseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TestCaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CodeChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    codename?: SortOrder
    description?: SortOrder
    difficult?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodeChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    codename?: SortOrder
    description?: SortOrder
    difficult?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodeChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    codename?: SortOrder
    description?: SortOrder
    difficult?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumDifficultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficult | EnumDifficultFieldRefInput<$PrismaModel>
    in?: $Enums.Difficult[] | ListEnumDifficultFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficult[] | ListEnumDifficultFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultWithAggregatesFilter<$PrismaModel> | $Enums.Difficult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultFilter<$PrismaModel>
    _max?: NestedEnumDifficultFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CodeChallengeScalarRelationFilter = {
    is?: CodeChallengeWhereInput
    isNot?: CodeChallengeWhereInput
  }

  export type TestCaseCountOrderByAggregateInput = {
    id?: SortOrder
    args?: SortOrder
    expectedOutput?: SortOrder
    codeChallengeId?: SortOrder
    deletedAt?: SortOrder
  }

  export type TestCaseMaxOrderByAggregateInput = {
    id?: SortOrder
    args?: SortOrder
    expectedOutput?: SortOrder
    codeChallengeId?: SortOrder
    deletedAt?: SortOrder
  }

  export type TestCaseMinOrderByAggregateInput = {
    id?: SortOrder
    args?: SortOrder
    expectedOutput?: SortOrder
    codeChallengeId?: SortOrder
    deletedAt?: SortOrder
  }

  export type TestCaseCreateNestedManyWithoutCodeChallengeInput = {
    create?: XOR<TestCaseCreateWithoutCodeChallengeInput, TestCaseUncheckedCreateWithoutCodeChallengeInput> | TestCaseCreateWithoutCodeChallengeInput[] | TestCaseUncheckedCreateWithoutCodeChallengeInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutCodeChallengeInput | TestCaseCreateOrConnectWithoutCodeChallengeInput[]
    createMany?: TestCaseCreateManyCodeChallengeInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type TestCaseUncheckedCreateNestedManyWithoutCodeChallengeInput = {
    create?: XOR<TestCaseCreateWithoutCodeChallengeInput, TestCaseUncheckedCreateWithoutCodeChallengeInput> | TestCaseCreateWithoutCodeChallengeInput[] | TestCaseUncheckedCreateWithoutCodeChallengeInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutCodeChallengeInput | TestCaseCreateOrConnectWithoutCodeChallengeInput[]
    createMany?: TestCaseCreateManyCodeChallengeInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumDifficultFieldUpdateOperationsInput = {
    set?: $Enums.Difficult
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TestCaseUpdateManyWithoutCodeChallengeNestedInput = {
    create?: XOR<TestCaseCreateWithoutCodeChallengeInput, TestCaseUncheckedCreateWithoutCodeChallengeInput> | TestCaseCreateWithoutCodeChallengeInput[] | TestCaseUncheckedCreateWithoutCodeChallengeInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutCodeChallengeInput | TestCaseCreateOrConnectWithoutCodeChallengeInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutCodeChallengeInput | TestCaseUpsertWithWhereUniqueWithoutCodeChallengeInput[]
    createMany?: TestCaseCreateManyCodeChallengeInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutCodeChallengeInput | TestCaseUpdateWithWhereUniqueWithoutCodeChallengeInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutCodeChallengeInput | TestCaseUpdateManyWithWhereWithoutCodeChallengeInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type TestCaseUncheckedUpdateManyWithoutCodeChallengeNestedInput = {
    create?: XOR<TestCaseCreateWithoutCodeChallengeInput, TestCaseUncheckedCreateWithoutCodeChallengeInput> | TestCaseCreateWithoutCodeChallengeInput[] | TestCaseUncheckedCreateWithoutCodeChallengeInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutCodeChallengeInput | TestCaseCreateOrConnectWithoutCodeChallengeInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutCodeChallengeInput | TestCaseUpsertWithWhereUniqueWithoutCodeChallengeInput[]
    createMany?: TestCaseCreateManyCodeChallengeInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutCodeChallengeInput | TestCaseUpdateWithWhereUniqueWithoutCodeChallengeInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutCodeChallengeInput | TestCaseUpdateManyWithWhereWithoutCodeChallengeInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type CodeChallengeCreateNestedOneWithoutTestCaseInput = {
    create?: XOR<CodeChallengeCreateWithoutTestCaseInput, CodeChallengeUncheckedCreateWithoutTestCaseInput>
    connectOrCreate?: CodeChallengeCreateOrConnectWithoutTestCaseInput
    connect?: CodeChallengeWhereUniqueInput
  }

  export type CodeChallengeUpdateOneRequiredWithoutTestCaseNestedInput = {
    create?: XOR<CodeChallengeCreateWithoutTestCaseInput, CodeChallengeUncheckedCreateWithoutTestCaseInput>
    connectOrCreate?: CodeChallengeCreateOrConnectWithoutTestCaseInput
    upsert?: CodeChallengeUpsertWithoutTestCaseInput
    connect?: CodeChallengeWhereUniqueInput
    update?: XOR<XOR<CodeChallengeUpdateToOneWithWhereWithoutTestCaseInput, CodeChallengeUpdateWithoutTestCaseInput>, CodeChallengeUncheckedUpdateWithoutTestCaseInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumDifficultFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficult | EnumDifficultFieldRefInput<$PrismaModel>
    in?: $Enums.Difficult[] | ListEnumDifficultFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficult[] | ListEnumDifficultFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultFilter<$PrismaModel> | $Enums.Difficult
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumDifficultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficult | EnumDifficultFieldRefInput<$PrismaModel>
    in?: $Enums.Difficult[] | ListEnumDifficultFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficult[] | ListEnumDifficultFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultWithAggregatesFilter<$PrismaModel> | $Enums.Difficult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultFilter<$PrismaModel>
    _max?: NestedEnumDifficultFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TestCaseCreateWithoutCodeChallengeInput = {
    id?: string
    args: string
    expectedOutput: string
    deletedAt?: Date | string | null
  }

  export type TestCaseUncheckedCreateWithoutCodeChallengeInput = {
    id?: string
    args: string
    expectedOutput: string
    deletedAt?: Date | string | null
  }

  export type TestCaseCreateOrConnectWithoutCodeChallengeInput = {
    where: TestCaseWhereUniqueInput
    create: XOR<TestCaseCreateWithoutCodeChallengeInput, TestCaseUncheckedCreateWithoutCodeChallengeInput>
  }

  export type TestCaseCreateManyCodeChallengeInputEnvelope = {
    data: TestCaseCreateManyCodeChallengeInput | TestCaseCreateManyCodeChallengeInput[]
    skipDuplicates?: boolean
  }

  export type TestCaseUpsertWithWhereUniqueWithoutCodeChallengeInput = {
    where: TestCaseWhereUniqueInput
    update: XOR<TestCaseUpdateWithoutCodeChallengeInput, TestCaseUncheckedUpdateWithoutCodeChallengeInput>
    create: XOR<TestCaseCreateWithoutCodeChallengeInput, TestCaseUncheckedCreateWithoutCodeChallengeInput>
  }

  export type TestCaseUpdateWithWhereUniqueWithoutCodeChallengeInput = {
    where: TestCaseWhereUniqueInput
    data: XOR<TestCaseUpdateWithoutCodeChallengeInput, TestCaseUncheckedUpdateWithoutCodeChallengeInput>
  }

  export type TestCaseUpdateManyWithWhereWithoutCodeChallengeInput = {
    where: TestCaseScalarWhereInput
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyWithoutCodeChallengeInput>
  }

  export type TestCaseScalarWhereInput = {
    AND?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
    OR?: TestCaseScalarWhereInput[]
    NOT?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
    id?: StringFilter<"TestCase"> | string
    args?: StringFilter<"TestCase"> | string
    expectedOutput?: StringFilter<"TestCase"> | string
    codeChallengeId?: StringFilter<"TestCase"> | string
    deletedAt?: DateTimeNullableFilter<"TestCase"> | Date | string | null
  }

  export type CodeChallengeCreateWithoutTestCaseInput = {
    id?: string
    title: string
    codename: string
    description: string
    difficult: $Enums.Difficult
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeChallengeUncheckedCreateWithoutTestCaseInput = {
    id?: string
    title: string
    codename: string
    description: string
    difficult: $Enums.Difficult
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeChallengeCreateOrConnectWithoutTestCaseInput = {
    where: CodeChallengeWhereUniqueInput
    create: XOR<CodeChallengeCreateWithoutTestCaseInput, CodeChallengeUncheckedCreateWithoutTestCaseInput>
  }

  export type CodeChallengeUpsertWithoutTestCaseInput = {
    update: XOR<CodeChallengeUpdateWithoutTestCaseInput, CodeChallengeUncheckedUpdateWithoutTestCaseInput>
    create: XOR<CodeChallengeCreateWithoutTestCaseInput, CodeChallengeUncheckedCreateWithoutTestCaseInput>
    where?: CodeChallengeWhereInput
  }

  export type CodeChallengeUpdateToOneWithWhereWithoutTestCaseInput = {
    where?: CodeChallengeWhereInput
    data: XOR<CodeChallengeUpdateWithoutTestCaseInput, CodeChallengeUncheckedUpdateWithoutTestCaseInput>
  }

  export type CodeChallengeUpdateWithoutTestCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficult?: EnumDifficultFieldUpdateOperationsInput | $Enums.Difficult
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeChallengeUncheckedUpdateWithoutTestCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficult?: EnumDifficultFieldUpdateOperationsInput | $Enums.Difficult
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseCreateManyCodeChallengeInput = {
    id?: string
    args: string
    expectedOutput: string
    deletedAt?: Date | string | null
  }

  export type TestCaseUpdateWithoutCodeChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    args?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestCaseUncheckedUpdateWithoutCodeChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    args?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestCaseUncheckedUpdateManyWithoutCodeChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    args?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}