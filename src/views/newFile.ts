import MahasiswaForm from '@/components/MhsForm.vue';
import TopNav from '@/components/TopNav.vue';
import LeftNav from '@/components/LeftNav.vue';
import FootNav from '@/components/FootNav.vue';
import { useCounterStore } from '@/stores/counter';

export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');

const __VLS_componentsOption = {};

let __VLS_name!: 'MahasiswaFormView';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'TopNav', typeof __VLS_localComponents, "TopNav", "TopNav", "TopNav"> &
__VLS_WithComponent<'LeftNav', typeof __VLS_localComponents, "LeftNav", "LeftNav", "LeftNav"> &
__VLS_WithComponent<'MahasiswaForm', typeof __VLS_localComponents, "MahasiswaForm", "MahasiswaForm", "MahasiswaForm"> &
__VLS_WithComponent<'FootNav', typeof __VLS_localComponents, "FootNav", "FootNav", "FootNav">;
__VLS_components.TopNav; __VLS_components.TopNav;
// @ts-ignore
[TopNav, TopNav,];
__VLS_components.LeftNav; __VLS_components.LeftNav;
// @ts-ignore
[LeftNav, LeftNav,];
__VLS_components.MahasiswaForm; __VLS_components.MahasiswaForm;
// @ts-ignore
[MahasiswaForm, MahasiswaForm,];
__VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3;
__VLS_components.FootNav; __VLS_components.FootNav;
// @ts-ignore
[FootNav, FootNav,];
{
const __VLS_0 = ({} as 'TopNav' extends keyof typeof __VLS_ctx ? { 'TopNav': typeof __VLS_ctx.TopNav; } : typeof __VLS_resolvedLocalAndGlobalComponents).TopNav;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, }));
({} as { TopNav: typeof __VLS_0; }).TopNav;
({} as { TopNav: typeof __VLS_0; }).TopNav;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
}
{
const __VLS_5 = ({} as 'LeftNav' extends keyof typeof __VLS_ctx ? { 'LeftNav': typeof __VLS_ctx.LeftNav; } : typeof __VLS_resolvedLocalAndGlobalComponents).LeftNav;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { LeftNav: typeof __VLS_5; }).LeftNav;
({} as { LeftNav: typeof __VLS_5; }).LeftNav;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
{
const __VLS_10 = ({} as 'MahasiswaForm' extends keyof typeof __VLS_ctx ? { 'MahasiswaForm': typeof __VLS_ctx.MahasiswaForm; } : typeof __VLS_resolvedLocalAndGlobalComponents).MahasiswaForm;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
({} as { MahasiswaForm: typeof __VLS_10; }).MahasiswaForm;
({} as { MahasiswaForm: typeof __VLS_10; }).MahasiswaForm;
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
{
const __VLS_15 = __VLS_intrinsicElements["h3"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
(__VLS_ctx.mhs.nama);
(__VLS_18.slots!).default;
}
{
const __VLS_20 = ({} as 'FootNav' extends keyof typeof __VLS_ctx ? { 'FootNav': typeof __VLS_ctx.FootNav; } : typeof __VLS_resolvedLocalAndGlobalComponents).FootNav;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
({} as { FootNav: typeof __VLS_20; }).FootNav;
({} as { FootNav: typeof __VLS_20; }).FootNav;
const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[mhs,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
MahasiswaForm: MahasiswaForm as typeof MahasiswaForm,
TopNav: TopNav as typeof TopNav,
LeftNav: LeftNav as typeof LeftNav,
FootNav: FootNav as typeof FootNav,
};
},

computed: {
...mapState(useCounterStore, ['count'])
}
});
return (await import('vue')).defineComponent({
setup() {
return {};
},

computed: {
...mapState(useCounterStore, ['count'])
}
});
})();
