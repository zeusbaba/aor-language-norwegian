module.exports = {
    aor: {
        action: {
            delete: 'Slett',
            show: 'Vise',
            list: 'Liste',
            save: 'Lagre',
            create: 'Skape',
            edit: 'Redigere',
            cancel: 'Avbryt',
            refresh: 'Oppdate om',
            add_filter: 'Legg til filter',
            remove_filter: 'Fjerne filter',
        },
        boolean: {
            true: 'Ja',
            false: 'Nei',
        },
        page: {
            list: '%{name} Liste',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Lagre %{name}',
            delete: 'Redigere %{name} #%{id}',
            dashboard: 'Oversikt',
        },
        input: {
            image: {
                upload_several: 'Legg noen filer for å laste opp, eller klikk for å velge en.',
                upload_single: 'Legg en file for å laste opp, eller klikk for å velge den',
            },
        },
        message: {
            yes: 'Ja',
            no: 'Nei',
            are_you_sure: 'Er du sikker?',
            about: 'Om',
        },
        navigation: {
            no_results: 'Ingen resultater',
            page_out_of_boundaries: 'Side nummer %{page} av grenser',
            page_out_from_end: 'Kan ikke gå videre etter siste siden.',
            page_out_from_begin: 'Kan ikke gå videre før første side',
            page_range_info: '%{offsetBegin}-%{offsetEnd} av %{total}',
            next: 'Neste',
            prev: 'Forrige',
        },
        auth: {
            username: 'Brukernavn',
            password: 'Passord',
            sign_in: 'Logg inn',
            sign_in_error: 'Godkjenning mislyktes, prøv på nytt',
            logout: 'Logg ut',
        },
        notification: {
            updated: 'Element oppdatert',
            created: 'Element opprettet',
            deleted: 'Element slettet',
            item_doesnt_exist: 'Element eksisterer ikke',
            http_error: 'Serverkommunikasjonsfeil',
        },
        validation: {
            required: 'Obligatorisk',
            minLength: 'Minimum %{min} tegn er påkrevd.',
            maxLength: 'Minimum %{max} tegn er påkrevd.',
            minValue: 'Må være minst %{min}',
            maxValue: 'Må være høyst %{max}',
            number: 'Må være et nummer',
            email: 'Må være gyldig e-post',
        },
    },
};