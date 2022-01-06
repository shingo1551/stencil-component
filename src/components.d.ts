/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CheckTodo {
        "done": boolean;
        "n": number;
        "text": string;
    }
    interface MyChart {
    }
    interface MyHello {
        "name": string;
    }
    interface MyLifecycle {
    }
    interface MyName {
        "first": string;
        "last": string;
    }
    interface MyProfile {
        "name": string;
    }
    interface MyStore {
    }
    interface MyTodo {
    }
}
declare global {
    interface HTMLCheckTodoElement extends Components.CheckTodo, HTMLStencilElement {
    }
    var HTMLCheckTodoElement: {
        prototype: HTMLCheckTodoElement;
        new (): HTMLCheckTodoElement;
    };
    interface HTMLMyChartElement extends Components.MyChart, HTMLStencilElement {
    }
    var HTMLMyChartElement: {
        prototype: HTMLMyChartElement;
        new (): HTMLMyChartElement;
    };
    interface HTMLMyHelloElement extends Components.MyHello, HTMLStencilElement {
    }
    var HTMLMyHelloElement: {
        prototype: HTMLMyHelloElement;
        new (): HTMLMyHelloElement;
    };
    interface HTMLMyLifecycleElement extends Components.MyLifecycle, HTMLStencilElement {
    }
    var HTMLMyLifecycleElement: {
        prototype: HTMLMyLifecycleElement;
        new (): HTMLMyLifecycleElement;
    };
    interface HTMLMyNameElement extends Components.MyName, HTMLStencilElement {
    }
    var HTMLMyNameElement: {
        prototype: HTMLMyNameElement;
        new (): HTMLMyNameElement;
    };
    interface HTMLMyProfileElement extends Components.MyProfile, HTMLStencilElement {
    }
    var HTMLMyProfileElement: {
        prototype: HTMLMyProfileElement;
        new (): HTMLMyProfileElement;
    };
    interface HTMLMyStoreElement extends Components.MyStore, HTMLStencilElement {
    }
    var HTMLMyStoreElement: {
        prototype: HTMLMyStoreElement;
        new (): HTMLMyStoreElement;
    };
    interface HTMLMyTodoElement extends Components.MyTodo, HTMLStencilElement {
    }
    var HTMLMyTodoElement: {
        prototype: HTMLMyTodoElement;
        new (): HTMLMyTodoElement;
    };
    interface HTMLElementTagNameMap {
        "check-todo": HTMLCheckTodoElement;
        "my-chart": HTMLMyChartElement;
        "my-hello": HTMLMyHelloElement;
        "my-lifecycle": HTMLMyLifecycleElement;
        "my-name": HTMLMyNameElement;
        "my-profile": HTMLMyProfileElement;
        "my-store": HTMLMyStoreElement;
        "my-todo": HTMLMyTodoElement;
    }
}
declare namespace LocalJSX {
    interface CheckTodo {
        "done": boolean;
        "n": number;
        "onTodo"?: (event: CustomEvent<number>) => void;
        "text": string;
    }
    interface MyChart {
    }
    interface MyHello {
        "name"?: string;
    }
    interface MyLifecycle {
    }
    interface MyName {
        "first"?: string;
        "last"?: string;
    }
    interface MyProfile {
        "name"?: string;
    }
    interface MyStore {
    }
    interface MyTodo {
    }
    interface IntrinsicElements {
        "check-todo": CheckTodo;
        "my-chart": MyChart;
        "my-hello": MyHello;
        "my-lifecycle": MyLifecycle;
        "my-name": MyName;
        "my-profile": MyProfile;
        "my-store": MyStore;
        "my-todo": MyTodo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "check-todo": LocalJSX.CheckTodo & JSXBase.HTMLAttributes<HTMLCheckTodoElement>;
            "my-chart": LocalJSX.MyChart & JSXBase.HTMLAttributes<HTMLMyChartElement>;
            "my-hello": LocalJSX.MyHello & JSXBase.HTMLAttributes<HTMLMyHelloElement>;
            "my-lifecycle": LocalJSX.MyLifecycle & JSXBase.HTMLAttributes<HTMLMyLifecycleElement>;
            "my-name": LocalJSX.MyName & JSXBase.HTMLAttributes<HTMLMyNameElement>;
            "my-profile": LocalJSX.MyProfile & JSXBase.HTMLAttributes<HTMLMyProfileElement>;
            "my-store": LocalJSX.MyStore & JSXBase.HTMLAttributes<HTMLMyStoreElement>;
            "my-todo": LocalJSX.MyTodo & JSXBase.HTMLAttributes<HTMLMyTodoElement>;
        }
    }
}
