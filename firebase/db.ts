import { onValue, ref, set } from 'firebase/database'
import { RunSet, Run, RunPoint } from './models'
import { getUser } from './auth'
import { db } from './index'

// ----- UTILS -----

function getData(path: string, cb: (data: any) => void ) {
  const { uid } = getUser()
  const theRef = ref(db, `users/${uid}/${path}`)
  onValue(theRef, (snapshot) => cb(snapshot.val()))
}

function setData(path: string, data: any) {
  const { uid } = getUser()
  return set(ref(db, `users/${uid}/${path}`), data)
}

// ----- FUNCTIONS -----

export function addUserToDb() {
  setData(`runs`, {})
}

export function getRuns(cb: (runs: RunSet) => void) {
  getData('runs', cb)
}

export function createRun(date: string, points: RunPoint[]) {
  const maxPoint = points.reduce((max, point) => point.distance > max.distance ? point : max, { distance: 0, time: 0 })
  const run: Run = {
    date,
    points,
    totalKms: maxPoint.distance,
    totalMinutes: maxPoint.time,
  }

  setData(`runs/${date}`, run)
}