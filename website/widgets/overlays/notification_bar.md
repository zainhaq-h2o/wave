---
title: Notification bar
keywords:
  - form
  - notification_bar
custom_edit_url: null
---

For cases when you need to inform the user about an important event like something finished with a success or error code, you can use in-app notifications. These have both color and position configurable and they allow embedding your custom UI components within (buttons/links) to control the UX flow even more. They do not require user consent but do not overuse them to not annoy your users. Note that this kind of notification is not visible to the user if they are not currently viewing the browser tab with your app.

These notifications close automatically after a specified `timeout` (defaults to `5s`) period. However, if `buttons` are set, the `timeout` is ignored and the notification shall be closed by the developer after clicking the action button.

[Desktop](/docs/widgets/overlays/notification) vs in-app notification:

|                                                      | Desktop | In-app |
|------------------------------------------------------|---------|--------|
| Can be seen when the app browser tab is not in view. |    ✅    |    ❌   |
| Configurable besides text.                           |    ❌    |    ✅   |
| Requires user consent.                               |    ✅    |    ❌   |

UX tips:

* Do not overuse. Too many notifications are noisy thus shall be used only when important.
* Use brief, clear messages.
* Use if you need to notify the user even if he is not currently looking at your app.

You can see the full API for [ui.notification_bar](/docs/api/ui#notification_bar) or check the interactive example in the Tour app.

![notification bar gif](/img/widgets/notification_bar.gif)

```py ignore
if not q.client.initialized:
    q.page['form'] = ui.form_card(box='1 1 2 4', items=[
        ui.button(name='top_right', label='Success top-right'),
    ])
    q.client.initialized = True
if q.args.top_right:
    q.page['meta'] = ui.meta_card(box='', notification_bar=ui.notification_bar(
        text='Success notification',
        type='success',
        position='top-right',
        buttons=[ui.button(name='btn', label='Link button', link=True)]
    ))
```