'use strict';

/**
 * @ngdoc service
 * @name flowsimUiApp.groups
 * @description
 * # groups
 * Service in the flowsimUiApp.
 */
angular.module('flowsimUiApp')
  .factory('Groups', function(fgConstraints, Protocols) {

var defGroups = 10;

var TIPS = {
  // All
  max_groups: 'Maximum number of groups for each type',
  // Group types
  all: 'Execute all buckets in a group',
  select: 'Execute one bucket in the group',
  indirect: 'Execute the one defined bucket in a group. '+
            'This group type supports only a single bucket.',
  fastFailover: 'This group type executes the first live bucket',
  // Group Capabilities
  select_weight: 'Support weight for select type groups',
  select_liveness: 'Support liveness for select type groups',
  chaining: 'Support chaining groups',
  chaining_checks: 'Check chaining for loops and delete',
  stats: 'Supports stats for groups',
  supportedActions: 'Actions supported by groups'
};

var TESTS = {
  max_groups: fgConstraints.isUInt(0, 0xffffffff),
};

/*
function mkActionField(name, value, key) {
  return {
    name: name,
    value: value,
    key: key
  };
}

function Capabilities(groups) {
  if(groups) {
    _.extend(this, groups);
    this.actions = _.map(groups.actions, function(f) { return _.clone(f); });
  } else {
    // default constructor
    this.max_groups = defaultGroups;
    this.all = true;
    this.select = true;
    this.indirect = true;
    this.fastfailover = true;
    this.select_weight = true;
    this.select_liveness = true;
    this.chaining = true;
    this.chaining_checks = true;
    this.stats = true;
    this.actions = [{
      protocol: 'Internal',
      fields: [
        mkActionField('Output', true, 'forward'),
        mkActionField('Set Group', true, 'set_group'),
        mkActionField('Set Queue', true, 'set_queue')
      ]
    }, {
      protocol: 'Ethernet',
        fields: [
          mkActionField('Src write', true, 'set_eth_src'),
          mkActionField('Dst write', true, 'set_eth_dst'),
          mkActionField('Typelen write', true, 'set_eth_type')
        ]
    }, {
    protocol: 'ARP',
      fields: [
        mkActionField('Opcode write', true, 'set_arp_op'),
        mkActionField('SHA write', true, 'set_arp_sha'),
        mkActionField('SPA write', true, 'set_arp_spa'),
        mkActionField('THA write', true, 'set_arp_tha'),
        mkActionField('TPA write', true, 'set_arp_tpa')
      ]
    }, {
      protocol: 'MPLS',
      fields: [
        mkActionField('Label write', true, 'set_mpls_label'),
        mkActionField('TC write', true, 'set_mpls_tc'),
        mkActionField('BOS write', true, 'set_mpls_bos'),
        mkActionField('Set TTL', true, 'set_mpls_ttl'),
        mkActionField('Dec TTL', true, 'dec_mpls_ttl'),
        mkActionField('Push Tag', true, 'push_mpls'),
        mkActionField('Pop Tag', true, 'pop_mpls')
      ]
    }, {
      protocol: 'VLAN',
      fields: [
        mkActionField('PCP write', true, 'set_vlan_pcp'),
        mkActionField('DEI write', true, 'set_vlan_dei'),
        mkActionField('VID write', true, 'set_vlan_vid'),
        mkActionField('Push tag', true, 'push_vlan'),
        mkActionField('Pop tag', true, 'pop_vlan')
      ]
    }, {
      protocol: 'IPv4',
      fields: [
        mkActionField('DSCP write', true, 'set_ip_dscp'),
        mkActionField('ECN write', true, 'set_ip_ecn'),
        mkActionField('Proto write', true, 'set_ip_proto'),
        mkActionField('Src write', true, 'set_ipv4_src'),
        mkActionField('Dst write', true, 'set_ipv4_dst'),
        mkActionField('Set TTL', true, 'set_nw_ttl'),
        mkActionField('Dec TTL', true, 'dec_nw_ttl')
      ]
    }, {
      protocol: 'IPv6',
      fields: [
        mkActionField('Src write', true, 'set_ipv6_src'),
        mkActionField('Dst write', true, 'set_ipv6_dst'),
        mkActionField('FLabel write', true, 'set_ipv6_flabel')
      ]
    }, {
      protocol: 'ICMPv4',
      fields: [
        mkActionField('Type write', true, 'set_icmpv4_type'),
        mkActionField('Code write', true, 'set_icmpv4_code')
      ]
    }, {
      protocol: 'ICMPv6',
      fields: [
        mkActionField('Type write', true, 'set_icmpv6_type'),
        mkActionField('Code write', true, 'set_icmpv6_code')
      ]
    }, {
      protocol: 'TCP',
      fields: [
        mkActionField('Src write', true, 'set_tcp_src'),
        mkActionField('Dst write', true, 'set_tcp_dst')
      ]
    }, {
      protocol: 'UDP',
      fields: [
        mkActionField('Src write', true, 'set_udp_src'),
        mkActionField('Dst write', true, 'set_udp_dst')
      ]
    }, {
      protocol: 'SCTP',
      fields: [
        mkActionField('Src write', true, 'set_sctp_src'),
        mkActionField('Dst write', true, 'set_sctp_dst')
      ]
    }];

  }
}
*/

function Group(group, groupProfile) {
  if(_.isObject(group)) {
  } else {
  }
}

Group.prototype.clone = function() {
  return new Group(this);
};

function GroupProfile(profile) {
  if(_.isObject(profile)) {
  } else {
  }
}

GroupProfile.prototype.clone = function() {
  return new GroupProfile(this);
};

GroupProfile.prototype.ofp_1_0 = function() {};
GroupProfile.prototype.ofp_1_1 = function() {};
GroupProfile.prototype.ofp_1_2 = function() {};
GroupProfile.prototype.ofp_1_3 = function() {};
GroupProfile.prototype.ofp_1_4 = function() {};

function Groups(groups) {
  if(_.isObject(groups)) {
  } else {
  }
}

Groups.prototype.clone = function() {
  return new Groups(this);
};

function Profile(profile) {
  if(_.isObject(profile)) {
    _.extend(this, profile);
    this.all.actionProfiles = new Protocols.ActionProfiles(profile.all.actionProfiles);
    this.select.actionProfiles = new Protocols.ActionProfiles(profile.select.actionProfiles);
    this.indirect.actionProfiles = new Protocols.ActionProfiles(profile.indirect.actionProfiles);
    this.fastFailover.actionProfiles = new Protocols.ActionProfiles(profile.fastFailover.actionProfiles);
  } else {
    // Types
    this.all = {
      enabled: true,
      actionProfiles: new Protocols.ActionProfiles(),
      maxGroups: defGroups
    };
    this.select = {
      enabled: true,
      actionProfiles: new Protocols.ActionProfiles(),
      maxGroups: defGroups,
      weight: true,
      liveness: true
    };
    this.indirect = {
      enabled: true,
      actionProfiles: new Protocols.ActionProfiles(),
      maxGroups: defGroups
    };
    this.fastFailover = {
      enabled: true,
      actionProfiles: new Protocols.ActionProfiles(),
      maxGroups: defGroups
    };
    // Capabilities
    // select_weight, select_liveness, chaining, chaining_checks
    this.chaining = true;
    this.chaining_checks = true;
  }
  this.all.tip = TIPS.all;
  this.select.tip = TIPS.select;
  this.indirect.tip = TIPS.indirect;
  this.fastFailover.tip = TIPS.fastFailover;
}

Profile.prototype.toBase = function(){
  return {
    all: {
        enabled: this.all.enabled,
        maxGroups: this.all.maxGroups,
        actionProfiles: this.all.actionProfiles.toBase()
    },
    select: {
        enabled: this.select.enabled,
        maxGroups: this.select.maxGroups,
        weight: this.select.weight,
        liveness: this.select.liveness,
        actionProfiles: this.select.actionProfiles.toBase()
    },
    indirect: {
        enabled: this.indirect.enabled,
        maxGroups: this.indirect.maxGroups,
        actionProfiles: this.indirect.actionProfiles.toBase()
    },
    fastFailover: {
        enabled: this.fastFailover.enabled,
        maxGroups: this.fastFailover.maxGroups,
        actionProfiles: this.fastFailover.actionProfiles.toBase()
    },
    chaining: this.chaining,
    chaining_checks: this.chaining_checks
  };
};

Profile.prototype.clone = function() {
  return new Profile(this);
};

Profile.prototype.ofp_1_0 = function() {};
Profile.prototype.ofp_1_1 = function() {};
Profile.prototype.ofp_1_2 = function() {};
Profile.prototype.ofp_1_3 = function() {};
Profile.prototype.ofp_1_4 = function() {};

var RANGES = {
};

return {
  Groups: Groups,
  Profile: Profile,
  TIPS: TIPS,
  TESTS: TESTS,
  RANGES: RANGES
};

});
