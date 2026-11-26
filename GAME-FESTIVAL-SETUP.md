# v6.3 Christmas Game Festival
## Before enabling shared scores
1. Review and merge the PR. Existing wishes, snowmen, playlists and keepsakes are unchanged.
2. Firebase Console > Firestore Database > Rules: replace with the complete repository firestore.rules and Publish. Do not use only the appended fragment.
3. Firestore Database > Indexes > Composite > Add index: collection ID board, classroom Ascending, xp Descending, query scope Collection. Wait for Enabled. See firestore.indexes.json. This is needed for the classroom ranking; school ranking uses a single-field index.
4. Open teacher.html, sign in using the existing teacher account, then Game Manager. Set a weekly round (suggested current ISO week), turn on games, edit the five quiz questions if desired, enable score submissions and save.
5. Test on a separate private browser as a student: play games, submit using nickname and class, approve from teacher account, reload leaderboard. Try class ranking and reject/revoke a test score.
## Behavior and limits
- Four games, 0–100 best XP per game per round; up to 400 XP, Levels 1–6. Daily mission is completing each game once, tracked locally by Bangkok date. No extra XP for repeated identical scores.
- Weekly competition rounds are teacher-managed, not automatically reset. Old rounds remain readable. School/class leaderboard shows up to 30 approved entries in the selected round. Class spelling must match submission.
- Anonymous Firebase auth; one score document per UID per round. Validated score increments and bounds, owner-only writes, at least 60 seconds between score improvements, teacher-only publication and revocation. Teacher review transaction checks for stale scores. Browser-generated scores cannot prove honest gameplay or prevent new anonymous identities. Do not treat as high-stakes grades.
- Public board displays teacher-approved nickname/class/score; no full name required. A rejected entry is removed from the board. Local progress is browser-specific. CSV exports loaded review rows only.
- Before rules/config are installed the page remains in practice mode. No Firebase billing plan change is needed for these features within Spark quotas; monitor actual read/write usage.
- Tests: JS parsing without imports, DOM ID consistency, unchanged old rules, simulated perfect play across four games using mocked DOM/timers. Real Safari/Chrome, Firebase rules emulator and production queries still require verification.
