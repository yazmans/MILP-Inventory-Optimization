const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  dbLoad:         ()           => ipcRenderer.invoke('db:load'),
  dbSave:         (inv, recs)  => ipcRenderer.invoke('db:save', inv, recs),
  dbAddPerson:    (person)     => ipcRenderer.invoke('db:add-person', person),
  dbCheckin:      (id)         => ipcRenderer.invoke('db:checkin', id),
  dbCheckout:     (id)         => ipcRenderer.invoke('db:checkout', id),
  dbDeletePerson: (id)         => ipcRenderer.invoke('db:delete-person', id),
  milpRun:        (payload)    => ipcRenderer.invoke('milp:run', payload),
  milpSave:       (data)       => ipcRenderer.invoke('milp:save', data),
  milpLoad:       ()           => ipcRenderer.invoke('milp:load'),
});
