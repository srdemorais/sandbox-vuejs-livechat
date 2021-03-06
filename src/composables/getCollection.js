import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (collection) => {
  const error = ref(null)
  const documents = ref(null)

  let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

  const unsub = collectionRef.onSnapshot(snap => {
    console.log('snapshot')
    let results = []
    snap.docs.forEach( doc => {
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
    })

    documents.value = results
    error.value = null
  }, (err) => {
    console.log(err.message)
    error.value = 'could not fetch data'
    documents.value = null
  })

  // unsub from the prev collection when watcher is stopped (component unmounted)
  watchEffect(onInvalidate => {
    onInvalidate(() => unsub())
  })

  return {documents, error}
}

export default getCollection