import { NavigationActions, NavigationParams } from 'react-navigation';

let _container; // eslint-disable-line

function setContainer(container: Object) {
    _container = container;
}

function goBack() {
    _container.dispatch(
        NavigationActions.back()
    )
}

function reset(routeName: string, params?: NavigationParams) {
    _container.dispatch(
        NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName,
                    params,
                }),
            ],
        }),
    );
}

function navigate(routeName: string, params?: NavigationParams) {
    _container.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        }),
    );
}

function navigateDeep(actions: { routeName: string, params?: NavigationParams }[]) {
    _container.dispatch(
        actions.reduceRight(
            (_prevAction, action): any =>
                NavigationActions.navigate({
                    routeName: action.routeName,
                    params: action.params
                }),
            undefined,
        ),
    );
}

export const NavigatorService = {
    setContainer,
    navigateDeep,
    navigate,
    reset,
    goBack
};