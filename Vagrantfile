# frozen_string_literal: true

# -*- mode: ruby -*-
# vi: set ft=ruby :

require 'yaml'
conf = YAML.load_file("vagrant_conf.yaml")

def configure_parallels_provider(config, name, ip, memory = 2048)
    config.vm.provider :parallels do |parallels, override|
      # override box url
      override.vm.box = "bento/ubuntu-20.04-arm64"
    end
end

def configure_vbox_provider(config, name, ip, memory = 2048)
    config.vm.provider :virtualbox do |vbox, override|
      # override box url
      override.vm.box = "bento/ubuntu-22.04"
      # enable cachier for local vbox vms
      override.cache.auto_detect = true
    end
end

def provision_ubuntu(config)
  system_update = ''
  dev_packages = <<-SHELL
      apt-get install -y emacs-nox htop tmux
  SHELL

  config.vm.provision 'shell', inline: <<-SHELL
    set -x

    apt-get update

    #{system_update}

    # To avoid falling over during spiky RAM utilization, allow swap to
    # dynamically expand.
    apt-get install -y swapspace

    apt-get install -y net-tools

    su -c 'curl https://sh.rustup.rs -sSf | sh -s -- -y' - vagrant

    #{dev_packages}
  SHELL
end

def provider_linux(config)
  %w[vmware_fusion vmware_workstation].each do |provider|
    config.vm.provider provider do |vmware, _override|
      # gcc uses 1.5 GB per process with Facebook style C++ :|
      cpu_count = Etc.nprocessors / 2
      vmware.cpus = cpu_count
      vmware.memory = 1536 * cpu_count
    end
  end
end

Vagrant.configure('2') do |config|
  config.vm.define 'cairis-ubuntu-22', autostart: false do |ubuntu|
    ubuntu.vm.box = 'bento/ubuntu-22.04'
    ubuntu.vm.hostname = 'cairis-ubuntu-22'

    provision_ubuntu ubuntu
    provider_linux ubuntu
  end
end
