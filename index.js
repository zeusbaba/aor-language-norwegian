module.exports = {
    aor: {
        action: {
            delete: 'Slett',
            show: 'Vise',
            list: 'Liste',
            save: 'Lagre',
            create: 'Skape',
            edit: 'Redigere',
            sort: 'Sortere',
            cancel: 'Avbryt',
            undo: 'Angre',
            refresh: 'Oppdate',
            add: 'Legg til',
            remove: 'Fjerne',
            add_filter: 'Legg til filter',
            remove_filter: 'Fjerne filter',
            back: 'Tilbake',
            bulk_actions: '%{smart_count} valgt',
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
            delete: 'Fjerne %{name} #%{id}',
            dashboard: 'Oversikt',
            not_found: 'Ikke funnet',
            loading: 'Laster',
        },
        input: {
            file: {
                upload_several: 'Legg noen filer for å laste opp, eller klikk for å velge en.',
                upload_single: 'Legg en file for å laste opp, eller klikk for å velge den',
            },
            image: {
                upload_several: 'Legg noen bilder for å laste opp, eller klikk for å velge en.',
                upload_single: 'Legg et bilde for å laste opp, eller klikk for å velge den',
            },
            references: {
                all_missing: 'Kan ikke finne referansedata.',
                many_missing:
                    'Minst en av de tilknyttede referansene er ikke tilgjengelig.',
                single_missing:
                    'Den tilknyttede referansene er ikke tilgjengelig.',
            },
        },
        message: {
            yes: 'Ja',
            no: 'Nei',
            are_you_sure: 'Er du sikker?',
            about: 'Om',
            not_found:
                'Enten du skrev en feil URL, eller du brukte en feil link',
            loading: 'Et øyeblikk, nettstedet laster',
            invalid_form: 'Skjemaet er ikke gyldig. Vennligst sjekk for feil.',
            delete_title: 'Fjerne %{name} #%{id}',
            delete_content: 'Er du sikkert på at du vil slette dette elementet?',
            bulk_delete_title:
                'Fjerne %{name} |||| Fjerne %{smart_count} %{name} elementer',
            bulk_delete_content:
                'Er du sikkert på at du vil slette %{name}? |||| Er du sikkert på at du vil slette %{smart_count} elementer?',
        },
        navigation: {
            no_results: 'Ingen resultater',
            no_more_results:
                'Sidetallet %{page} er utenfor grensene. Prøv den forrige siden.',
            page_out_of_boundaries: 'Sidetallet %{page} er utenfor grensene.',
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
            bad_item: 'Feil element',
            item_doesnt_exist: 'Element eksisterer ikke',
            http_error: 'Serverkommunikasjonsfeil',
            canceled: 'Handling avbrutt',
        },
        validation: {
            required: 'Obligatorisk',
            minLength: 'Minimum %{min} tegn er påkrevd.',
            maxLength: 'Minimum %{max} tegn er påkrevd.',
            minValue: 'Må være minst %{min}',
            maxValue: 'Må være høyst %{max}',
            number: 'Må være et nummer',
            email: 'Må være gyldig e-post',
            oneOf: 'Må være en av: %{options}',
            regex: 'Må samsvare med et spesifikt format (regexp): %{pattern}',
        },
    },
};
