// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6rE6XB7Jxf94aDppVmg3Nf
// Component: UDMAc1-Ts9pM

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import Order from "../../Order"; // plasmic-import: 90MprgbLVpCQ/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 6rE6XB7Jxf94aDppVmg3Nf/projectcss
import sty from "./PlasmicOrders.module.css"; // plasmic-import: UDMAc1-Ts9pM/css

import imagesJpgIxUt0WvB32 from "./images/imagesJpg.jpg"; // plasmic-import: _ixUt0wvB32_/picture

createPlasmicElementProxy;

export type PlasmicOrders__VariantMembers = {};
export type PlasmicOrders__VariantsArgs = {};
type VariantPropType = keyof PlasmicOrders__VariantsArgs;
export const PlasmicOrders__VariantProps = new Array<VariantPropType>();

export type PlasmicOrders__ArgsType = {};
type ArgPropType = keyof PlasmicOrders__ArgsType;
export const PlasmicOrders__ArgProps = new Array<ArgPropType>();

export type PlasmicOrders__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  order?: Flex__<typeof Order>;
};

export interface DefaultOrdersProps {
  className?: string;
}

const $$ = {};

function PlasmicOrders__RenderFunc(props: {
  variants: PlasmicOrders__VariantsArgs;
  args: PlasmicOrders__ArgsType;
  overrides: PlasmicOrders__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    getorders: usePlasmicDataOp(() => {
      return {
        sourceId: "vHyqcPfaZpSXGKeQFyToxy",
        opId: "7a8ee4b5-01f6-4abf-823e-56243739a5cc",
        userArgs: {},
        cacheKey: `plasmic.$.7a8ee4b5-01f6-4abf-823e-56243739a5cc.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            brand={
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__u5Sp2
                )}
                href={"#"}
                platform={"react"}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__rkuUv)}
                  displayHeight={"40px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={{
                    src: imagesJpgIxUt0WvB32,
                    fullWidth: 225,
                    fullHeight: 225,
                    aspectRatio: undefined
                  }}
                />
              </PlasmicLink__>
            }
            className={classNames("__wab_instance", sty.navigationBar)}
            closeButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__mDpqe)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/close.svg"}
              />
            }
            itemsGap={8}
            menuItems={
              <React.Fragment>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__q5Mqp
                  )}
                  href={"/"}
                  platform={"react"}
                >
                  {"Home"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__ioaJt
                  )}
                  href={"/"}
                  platform={"react"}
                >
                  {"About"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__xBo9C
                  )}
                  href={"/"}
                  platform={"react"}
                >
                  {"Contact"}
                </PlasmicLink__>
              </React.Fragment>
            }
            openButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__ttQjL)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/menu.svg"}
              />
            }
            responsiveBreakpoint={768}
          />

          {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
            (() => {
              try {
                return $queries.getorders.data.response;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return [];
                }
                throw e;
              }
            })()
          ).map((__plasmic_item_0, __plasmic_idx_0) => {
            const currentItem = __plasmic_item_0;
            const currentIndex = __plasmic_idx_0;
            return (
              <Order
                data-plasmic-name={"order"}
                data-plasmic-override={overrides.order}
                className={classNames("__wab_instance", sty.order)}
                currentItem={currentItem}
                key={currentIndex}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navigationBar", "order"],
  navigationBar: ["navigationBar"],
  order: ["order"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  order: typeof Order;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOrders__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOrders__VariantsArgs;
    args?: PlasmicOrders__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOrders__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicOrders__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicOrders__ArgProps,
          internalVariantPropNames: PlasmicOrders__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicOrders__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOrders";
  } else {
    func.displayName = `PlasmicOrders.${nodeName}`;
  }
  return func;
}

export const PlasmicOrders = Object.assign(
  // Top-level PlasmicOrders renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    order: makeNodeComponent("order"),

    // Metadata about props expected for PlasmicOrders
    internalVariantProps: PlasmicOrders__VariantProps,
    internalArgProps: PlasmicOrders__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "orders",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicOrders;
/* prettier-ignore-end */
