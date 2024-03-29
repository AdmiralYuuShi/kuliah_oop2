import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, mhs } from './MatkulView.vue'

function __VLS_template() {
  let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {}
  /* Components */
  let __VLS_otherComponents!: NonNullable<
    typeof __VLS_internalComponent extends { components: infer C } ? C : {}
  > &
    typeof __VLS_componentsOption
  let __VLS_own!: __VLS_SelfComponent<
    typeof __VLS_name,
    typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots })
  >
  let __VLS_localComponents!: typeof __VLS_otherComponents &
    Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>
  let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx
  /* Style Scoped */
  type __VLS_StyleScopedClasses = {}
  let __VLS_styleScopedClasses!:
    | __VLS_StyleScopedClasses
    | keyof __VLS_StyleScopedClasses
    | (keyof __VLS_StyleScopedClasses)[]
  /* CSS variable injection */
  /* CSS variable injection end */
  let __VLS_resolvedLocalAndGlobalComponents!: {} & __VLS_WithComponent<
    'VTextField',
    typeof __VLS_localComponents,
    'VTextField',
    'vTextField',
    'v-text-field'
  > &
    __VLS_WithComponent<
      'MatkulForm',
      typeof __VLS_localComponents,
      'MatkulForm',
      'MatkulForm',
      'MatkulForm'
    >
  ;(({}) as __VLS_IntrinsicElements).h1
  ;(({}) as __VLS_IntrinsicElements).h1
  __VLS_components.VTextField
  __VLS_components.VTextField
  __VLS_components.vTextField
  __VLS_components.vTextField
  __VLS_components['v-text-field']
  __VLS_components['v-text-field']
  // @ts-ignore
  ;[VTextField, VTextField]
  __VLS_components.MatkulForm
  __VLS_components.MatkulForm
  // @ts-ignore
  ;[MatkulForm, MatkulForm]
  {
    const __VLS_0 = ({} as __VLS_IntrinsicElements)['h1']
    const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0)
    ;(({}) as __VLS_IntrinsicElements).h1
    ;(({}) as __VLS_IntrinsicElements).h1
    const __VLS_2 = __VLS_1({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_1))
    ;(
      ({}) as (
        props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> &
          Record<string, unknown>
      ) => void
    )({ ...{} })
    const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!
    let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>
    __VLS_3.slots!.default
  }
  {
    let __VLS_5!: 'VTextField' extends keyof typeof __VLS_ctx
      ? typeof __VLS_ctx.VTextField
      : 'vTextField' extends keyof typeof __VLS_ctx
      ? typeof __VLS_ctx.vTextField
      : 'v-text-field' extends keyof typeof __VLS_ctx
      ? (typeof __VLS_ctx)['v-text-field']
      : (typeof __VLS_resolvedLocalAndGlobalComponents)['VTextField']
    const __VLS_6 = __VLS_asFunctionalComponent(
      __VLS_5,
      new __VLS_5({
        ...{},
        modelValue: __VLS_ctx.mhs.getNpm,
        clearable: true,
        hideDetails: 'auto',
        label: 'Last name'
      })
    )
    ;(({}) as { VTextField: typeof __VLS_5 }).VTextField
    ;(({}) as { VTextField: typeof __VLS_5 }).VTextField
    const __VLS_7 = __VLS_6(
      {
        ...{},
        modelValue: __VLS_ctx.mhs.getNpm,
        clearable: true,
        hideDetails: 'auto',
        label: 'Last name'
      },
      ...__VLS_functionalComponentArgsRest(__VLS_6)
    )
    ;(
      ({}) as (
        props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> &
          Record<string, unknown>
      ) => void
    )({
      ...{},
      modelValue: __VLS_ctx.mhs.getNpm,
      clearable: true,
      hideDetails: 'auto',
      label: 'Last name'
    })
    const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!
    let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>
  }
  {
    let __VLS_10!: 'MatkulForm' extends keyof typeof __VLS_ctx
      ? typeof __VLS_ctx.MatkulForm
      : (typeof __VLS_resolvedLocalAndGlobalComponents)['MatkulForm']
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{} }))
    ;(({}) as { MatkulForm: typeof __VLS_10 }).MatkulForm
    ;(({}) as { MatkulForm: typeof __VLS_10 }).MatkulForm
    const __VLS_12 = __VLS_11({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_11))
    ;(
      ({}) as (
        props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> &
          Record<string, unknown>
      ) => void
    )({ ...{} })
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!
    let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>
  }
  if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
  }
  var __VLS_slots!: {}
  // @ts-ignore
  ;[mhs, mhs, mhs]
  return __VLS_slots
}
