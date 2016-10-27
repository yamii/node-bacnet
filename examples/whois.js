'use strict'

const deviceAddress = process.argv[2]
const deviceIdMin = process.argv[3]
const deviceIdMax = process.argv[4]

const bacnet = require('../bacnet.js')
const r = bacnet.init({
  datalink: {
    iface: process.env.BACNET_INTERFACE,
    ip_port: process.env.BACNET_PORT || 0xBAC0
  },
  device: false
})

r.on('iam', function (iam) {
  console.log('iam: ', iam)
})

r.whois(deviceAddress, deviceIdMin, deviceIdMax)

setTimeout(function () {}, 1000)
