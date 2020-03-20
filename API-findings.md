A keresek megtalalhatoak az `Insomnia.json` fajlban.

Az egyes keresek valaszait pedig a **src/mocks** mappaban talalhato mock objektumokba mentettem el.

# Users (_/me_)

| Name  | Slug             |
| :---- | :--------------- |
| ninja | f0aa1db2bc8d7952 |

# Organizations (_/organizations_)

| Name      | Slug             | Owners                                                       |
| :-------- | :--------------- | ------------------------------------------------------------ |
| bjornbORG | f57e770b0b6d7eb6 | norbert - cb4ddefb8eed7e76<br>abudabitest - da67280971d16120 |
| NinjaCorp | 7cff6a494fa461ac | ninja - f0aa1db2bc8d7952                                     |
| SAMLOrg   | 6345241944df6e29 | ninja - f0aa1db2bc8d7952                                     |

Eddig minden okes.

# Apps (_/apps?sort_by=last_build_at_)

| Name                        | Slug                 | Owner                           |
| --------------------------- | -------------------- | ------------------------------- |
| **Vet's 🐎**                | **3c1cb20bd5a692d8** | **erosdome - f9d70782f36185cc** |
| Fast building app           | d08709ae5c5f6171     | ninja - f0aa1db2bc8d7952        |
| Android sample app          | a71b886445ea412a     | ninja - f0aa1db2bc8d7952        |
| devise                      | 6d22f30d0f50d3ce     | ninja - f0aa1db2bc8d7952        |
| sample-apps-android-sdk22   | 6bf5b2870ff2b5c6     | NinjaCorp - 7cff6a494fa461ac    |
| **ios-and-android-project** | **9956b44ce1e417a3** | **SAML_ORG - d6450fb640288a69** |
| NinjaCorp fast building app | a9320cc65d7846dc     | NinjaCorp - 7cff6a494fa461ac    |
| iOS sample app              | b61886cce55814b3     | ninja - f0aa1db2bc8d7952        |

A ket kiemelt app elvileg sem a felhasznalohoz, sem pedig a felhasznalohoz rendelt vallatokhoz valamelyikehez tartozik.

- A **Vet's 🐎** app eseteben a tulajdonos es masik felhasznalo **erosdome**!

```json
{
  "account_type": "user",
  "name": "erosdome",
  "slug": "f9d70782f36185cc"
},
```

- Az **ios-and-android-project** app eseteben ugyan a tulajdonos neve hasonlo az organizations-nel levo **SAMLOrg**-hoz, de nem ugyanaz!

A user-hez tartozo **SAMLOrg - 6345241944df6e29** `!==` **SAML_ORG - d6450fb640288a69**

# Builds (_/builds_)

Nehany megfigyeles, eszrevetel:

- Hibas `paging` objektum

```json
"paging": {
  "total_item_count": 0,
  "page_item_limit": 50,
  "next": "f5c70e531269157f"
}
```

A `total_item_count` minden esetben **0 ertek**kel tert vissza annak ellenere is, hogy **50 elem**et kaptam vissza valaszban.

- `app.status` vs `build.status`

Ebben az esetben az app status az app-hoz tartozo legutolso build status-at jelolne, vagy teljesen mast?

Amennyiben igen, akkor a **NinjaCorp fast building app** eseteben ezek a status-ok nem stimmelnek.

_App_

```json
{
  "slug": "a9320cc65d7846dc",
  "title": "NinjaCorp fast building app",
  "project_type": "android",
  "provider": "github",
  "repo_owner": "bitrise-samples",
  "repo_url": "https://github.com/bitrise-samples/sample-apps-android-sdk22",
  "repo_slug": "sample-apps-android-sdk22",
  "is_disabled": false,
  "status": 1,
  "is_public": false,
  "owner": {
    "account_type": "organization",
    "name": "NinjaCorp",
    "slug": "7cff6a494fa461ac"
  },
  "avatar_url": null
}
```

_Last build_

```json
{
  "triggered_at": "2016-08-01T10:43:42Z",
  "started_on_worker_at": null,
  "environment_prepare_finished_at": null,
  "finished_at": "2016-08-01T10:43:43Z",
  "slug": "02a0582ec970d94b",
  "status": 3,
  "status_text": "aborted",
  "abort_reason": "Build could not start because you reached your monthly build limit. You can upgrade your subscription to get unlimited builds each month. If you just need a little bit more this month feel free to contact us!",
  "is_on_hold": false,
  "branch": "master",
  "build_number": 1,
  "commit_hash": null,
  "commit_message": null,
  "tag": null,
  "triggered_workflow": "",
  "triggered_by": null,
  "machine_type_id": "standard",
  "stack_identifier": null,
  "original_build_params": {
    "branch": "master",
    "workflow_id": "successful-workflow"
  },
  "pull_request_id": 0,
  "pull_request_target_branch": null,
  "pull_request_view_url": null,
  "commit_view_url": null,
  "repository": {
    "slug": "a9320cc65d7846dc",
    "title": "NinjaCorp fast building app",
    "project_type": "android",
    "provider": "github",
    "repo_owner": "bitrise-samples",
    "repo_url": "https://github.com/bitrise-samples/sample-apps-android-sdk22",
    "repo_slug": "sample-apps-android-sdk22",
    "is_disabled": false,
    "status": 1,
    "is_public": false,
    "owner": {
      "account_type": "organization",
      "name": "NinjaCorp",
      "slug": "7cff6a494fa461ac"
    },
    "avatar_url": null
  }
}
```

Az `app.status = 1` meg az egyetlen es legutolso build-je `build.status = 3`.

Bar mivel a **build_number: 1**, lehet, hogy csak migracios hibarol van szo.
