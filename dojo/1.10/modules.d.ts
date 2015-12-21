/// <reference path="index.d.ts" />

declare var require: dojo.Require;
declare var define: dojo.Define;

declare module 'dojo/_base/array' {
	const dojoArray: dojo._base.Array;
	export = dojoArray;
}

declare module 'dojo/_base/Color' {
	const Color: dojo._base.ColorConstructor;
	export = Color;
}

declare module 'dojo/_base/config' {
	const config: dojo._base.Config;
	export = config;
}

declare module 'dojo/_base/connect' {
	const connect: dojo._base.Connect;
	export = connect;
}

declare module 'dojo/_base/declare' {
	const dojoDeclare: dojo._base.Declare;
	export = dojoDeclare;
}

declare module 'dojo/_base/Deferred' {
	const Deferred: dojo._base.DeferredConstructor;
	export = Deferred;
}

declare module 'dojo/_base/event' {
	const event: dojo._base.EventModule;
	export = event;
}

declare module 'dojo/_base/fx' {
	const fx: dojo._base.Fx;
	export = fx;
}

declare module 'dojo/_base/html' {
	const dojo: dojo._base.Dojo;
	export = dojo;
}

/* TODO: dojo/_base/json */

declare module 'dojo/_base/kernel' {
	const dojo: dojo._base.Dojo;
	export = dojo;
}

declare module 'dojo/_base/lang' {
	const lang: dojo._base.Lang;
	export = lang;
}

declare module 'dojo/_base/loader' {
	const loader: dojo._base.Loader;
	export = loader;
}

/* TODO: dojo/_base/NodeList */

/* TODO: dojo/_base/query */

declare module 'dojo/_base/sniff' {
	const has: dojo.Has;
	export = has;
}

declare module 'dojo/_base/unload' {
	const unload: dojo._base.Unload;
	export = unload;
}

declare module 'dojo/_base/url' {
	const url: dojo._base.Url;
	export = url;
}

declare module 'dojo/_base/window' {
	const window: dojo._base.Window;
	export = window;
}

declare module 'dojo/_base/xhr' {
	const xhr: dojo._base.Xhr;
	export = xhr;
}

declare module 'dojo/AdapterRegistry' {
	const AdapterRegistry: dojo.AdapterRegistryConstructor;
	export = AdapterRegistry;
}

declare module 'dojo/aspect' {
	const aspect: dojo.Aspect;
	export = aspect;
}

declare module 'dojo/back' {
	const back: dojo.Back;
	export = back;
}

declare module 'dojo/behavior' {
	const behavior: dojo.Behavior;
	export = behavior;
}

declare module 'dojo/cache' {
	const cache: dojo.Cache;
	export = cache;
}

declare module 'dojo/cldr/monetary' {
	const monetary: dojo.cldr.Monetary;
	export = monetary;
}

declare module 'dojo/cldr/supplemental' {
	const supplemental: dojo.cldr.Supplemental;
	export = supplemental;
}

declare module 'dojo/colors' {
	const Color: dojo._base.ColorConstructor;
	export = Color;
}

declare module 'dojo/cookie' {
	const cookie: dojo.Cookie;
	export = cookie;
}

declare module 'dojo/currency' {
	const currency: dojo.Currency;
	export = currency;
}

declare module 'dojo/date' {
	const date: dojo.date.Date;
	export = date;
}

declare module 'dojo/date/locale' {
	const dateLocale: dojo.date.DateLocale;
	export = dateLocale;
}

declare module 'dojo/date/stamp' {
	const stamp: dojo.date.Stamp;
	export = stamp;
}

declare module 'dojo/debounce' {
	const debounce: dojo.Debounce;
	export = debounce;
}

declare module 'dojo/Deferred' {
	const Deferred: dojo.DeferredConstructor;
	export = Deferred;
}

declare module 'dojo/DeferredList' {
	const DeferredList: dojo.DeferredListConstructor;
	export = DeferredList;
}

declare module 'dojo/dnd/autoscroll' {
	const autoscroll: dojo.dnd.AutoScroll;
	export = autoscroll;
}

declare module 'dojo/dnd/AutoSource' {
	const AutoSource: dojo.dnd.AutoSourceConstructor;
	export = AutoSource;
}

declare module 'dojo/dnd/Avatar' {
	const Avatar: dojo.dnd.AvatarConstructor;
	export = Avatar;
}

declare module 'dojo/dnd/common' {
	const common: dojo.dnd.Common;
	export = common;
}

declare module 'dojo/dnd/Container' {
	const Container: dojo.dnd.ContainerConstructor;
	export = Container;
}

declare module 'dojo/dnd/Manager' {
	const Manager: dojo.dnd.ManagerConstructor;
	export = Manager;
}

declare module 'dojo/dnd/Moveable' {
	const Moveable: dojo.dnd.Moveable;
	export = Moveable;
}

declare module 'dojo/dnd/Mover' {
	const Mover: dojo.dnd.MoverConstructor;
	export = Mover;
}

declare module 'dojo/dnd/Selector' {
	const Selector: dojo.dnd.SelectorConstructor;
	export = Selector;
}

declare module 'dojo/dnd/Source' {
	const Source: dojo.dnd.Source;
	export = Source;
}

declare module 'dojo/dnd/Target' {
	const Target: dojo.dnd.TargetConstructor;
	export = Target;
}

declare module 'dojo/dnd/TimedMoveable' {
	const TimedMoveable: dojo.dnd.TimedMoveableConstructor;
	export = TimedMoveable;
}

declare module 'dojo/dojo' {
	const require: dojo.Require;
	export = require;
}

declare module 'dojo/dom' {
	const dom: dojo.Dom;
	export = dom;
}

declare module 'dojo/dom-attr' {
	const domAttr: dojo.DomAttr;
	export = domAttr;
}

declare module 'dojo/dom-class' {
	const domClass: dojo.DomClass;
	export = domClass;
}

declare module 'dojo/dom-construct' {
	const domConstruct: dojo.DomConstruct;
	export = domConstruct;
}

declare module 'dojo/dom-form' {
	const domForm: dojo.DomForm;
	export = domForm;
}

declare module 'dojo/dom-geometry' {
	const domGeom: dojo.DomGeometry;
	export = domGeom;
}

declare module 'dojo/Evented' {
	const Evented: dojo.EventedConstructor;
	export = Evented;
}

declare module 'dojo/has' {
	const has: dojo.Has;
	export = has;
}

declare module 'dojo/io-query' {
	const ioQuery: dojo.IoQuery;
	export = ioQuery;
}

declare module 'dojo/number' {
	const number: dojo.Number;
	export = number;
}

declare module 'dojo/on' {
	const on: dojo.On;
	export = on;
}

declare module 'dojo/request' {
	const request: dojo.request.Request;
	export = request;
}

declare module 'dojo/request/watch' {
	const watch: dojo.request.Watch;
	export = watch;
}

declare module 'dojo/request/xhr' {
	const xhr: dojo.request.Xhr;
	export = xhr;
}

declare module 'dojo/text' {
	const text: dojo.Text;
	export = text;
}

declare module 'dojo/topic' {
	const hub: dojo.Topic;
	export = hub;
}

declare module 'dojo/touch' {
	const touch: dojo.Touch;
	export = touch;
}

declare module 'dojo/window' {
	const window: dojo.WindowModule;
	export = window;
}
