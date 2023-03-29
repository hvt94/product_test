var resourceConstants = {};

resourceConstants.label = {
    global: {
        keyword_search_is_empty: "Từ khóa tìm kiếm trống",
        button_confirm: "Xác nhận",
        confirm: "Xác nhận",
        reload_the_page: "Tải lại trang",
        button_reload_the_page: "Tải lại trang",
        button_cancel: "Hủy",
        error: "Lỗi",
        year: "năm",
        hour: "Giờ",
        button_close: "Đóng lại",
        button_save: "Lưu thay đổi",
        button_delete: "Xóa",
        button_co: "CÓ",
        button_khong: "KHÔNG",
        upgrade_warning_box_service_package_remaining_duration: "Thời gian còn lại của gói dịch vụ là {0}",
        upgrade_warning_box_service_package_remaining_duration_extend: "Quý khách có muốn nâng cấp <b>trong thời gian còn lại </b> không?",
        upgrade_warning_box_service_package_remaining_duration_new_cycle: "Quý khách có muốn nâng cấp <b>theo chu kì mới </b> không? ",
        upgrade_warning_box_upgrade_as_type: "Bạn muốn nâng cấp trong thời gian nào?",
        upgrade_warning_box_remaining_duration: "Thời gian còn lại",
        upgrade_warning_box_new_duration: "Chu kỳ mới",
        period_hour: "giờ",
        period_day: "ngày",
        period_week: "tuần",
        button_restore: "Restore",
        shopping_cart_add_storage: "Mua thêm {0}",
        shopping_cart_add_server: "Số lượng Server",
        shopping_cart_add_vm: "Bổ sung VM",
    },
    // Scripts/modelView/shoppingCartConfirmModel.js
    shoppingCartConfirm: {
        button_delete_promotion_code: "Xóa mã khuyến mãi"
    },
    // Scripts/modelView/cloudServerUpgradeModel.js,
    cloudServer: {
        hard_drive_operating_system: "Ổ cài hệ điều hành"
    },
    //Scripts/js/cloudserver-snapshot.js
    cloudServerSnapshot: {
        button_create_snapshot: "Tạo Snapshot",
        button_delete_snapshot: "Xóa Snapshot",
        button_recover_from_snapshot: "Khôi phục từ Snapshot"
    },
    //Scripts/js/serviceInit-Index.js
    serviceInit: {
        button_start_machine: "Bật máy",
        button_stop_machine: "Tắt máy",
        button_reset_machine: "Khởi động lại",
        button_save_changes: "Khởi động lại",
        button_close: "Đóng lại",
        button_save: "Lưu thay đổi",
        button_removeNode: "Xóa node"
    },
    endpointSecurity: {
        EndpointReportBlockedWebsite: "Chỉ các endpoint có blocked websites",
        EndpointReportBlockedThreats: "Chỉ các endpoint được quản lý có blocked threats",
        EndpointReportWithTraffic: " Chỉ các endpoint có nguy cơ: traffic attempts và port scans",
        EndpointReportWithStillInfected: "Chỉ các endpoint bị nhiễm malware",
        EndpointReportWithIssues: "Chỉ các endpoint có vấn đề",
        EndpointReportWithOption: "Tất cả các endpoint theo điều kiện lọc bên dưới",
        EndpointReportLast2Month: "2 tháng trước",
        EndpointReportLast3Month: "3 tháng trước",
        EndpointReportLastday: "Hôm qua",
        EndpointReportLastMonth: "Tháng trước",
        EndpointReportLastWeek: "Tuần trước",
        EndpointReportThisMonth: "Tháng này",
        EndpointReportThisWeek: "Tuần này",
        EndpointReportToday: "Hôm nay",
        EndpointReportLastYear: "Năm trước",
        EndpointReportThisYear: "Năm nay"
    }
};

resourceConstants.message = {
    global: {
        an_error_occurred_and_retry: "Đã có lỗi xảy ra, vui lòng thử lại sau!",
        an_error_occurred: "Có lỗi xảy ra",
        you_do_not_have_access: "Bạn không có quyền truy cập!",
        the_data_you_requested_no_longer_exists_or_has_been_deleted: "Dữ liệu bạn yêu cầu không còn tồn tại hoặc đã bị xóa.",
        please_contact_the_system_administrator: "Vui lòng liên hệ với người quản trị hệ thống",
        data_does_not_exist: "Dữ liệu không tồn!",
        auto_close: "Tự động đóng sau 5 giây",
        upgrade_warning_box_please_select: "Vui lòng chọn!",
        upgrade_warning_box_remaining_less_than_min_duration: "Thời gian còn lại nhỏ hơn chu kỳ thanh toán tối thiểu của gói dịch vụ nâng cấp.</br>Vui lòng chọn nâng cấp theo chu kỳ mới.",
        success: "Thành công",
        failed: "Không thành công",
        change_user_password_invalid_data: "Vui lòng kiểm tra lại thông tin",
        change_user_password_change_pass_success: "Thay đổi mật khẩu thành công",
        your_order_is_completed: "Đơn hàng của quý khách đã được thanh toán thành công tại VNPay",
        notification: "Thông báo",
        your_order_is_not_completed: "Đơn hàng của quý khách chưa được thanh toán thành công tại VNPay",
        att_is_required: "Vui lòng chọn số lượng thông số  ",
        att_textbox_is_required: "Vui lòng nhập vào ",
        att_textbox_limit_text_length: " không vượt quá 300 ký tự ",
        warning: "Cảnh báo",
        paygo_not_enough_money_to_register: "Tài khoản của bạn không đủ tiền để đăng ký dịch vụ",
        top_up: "Nạp tiền",
        skip: "Bỏ qua",
        pay: "Thanh toán",
    },
    // Scripts/modelView/domainModel.js , Scripts/modelView/notifyModel.js , Scripts/js/Domain-Index.js
    domain: {
        choose_a_domain_name: "Vui lòng chọn tên miền",
        no_domain_yet: "Chưa có tên miền nào",
        please_check_the_registration_information: "Vui lòng kiểm tra lại thông tin đăng ký",
        the_file_is_invalid: "Tệp tin không hợp lệ",
        upload_successfully: "Tải lên thành công!",
    },
    // Scripts/modelView/shoppingCartPaymentModel.js
    shoppingCartPayment: {
        you_have_not_entered_billing_information: "Bạn chưa nhập thông tin gửi hóa đơn",
    },
    // Scripts/modelView/shoppingCartConfirmModel.js
    shoppingCartConfirm: {
        you_not_verified_the_terms_of_this_company: "Bạn chưa xác nhận điều khoản quy định của Công ty Viettel IDC",
        reset_service_upgrade: "Dịch vụ của quý khách sẽ khởi động lại trong quá trình nâng cấp!",
        reset_service_additional: "Bạn có chắc chắn mua bổ sung với cấu hình đã chọn không?",
        confirm_delete_promotion_code: "Bạn có chắc chắn muốn xóa mã khuyến mãi [{0}]?"
    },
    // Scripts/modelView/notifyModel.js
    notifyModel: {
        no_notify: "Không có thông báo nào",
        show_record_notify: "Hiển thị {0} đến {1} của {2} thông báo",
        show: "Hiển thị",
        to: "đến",
        of: "của",
        notify: "thông báo",

    },
    // Scripts/modelView/cloudServerUpgradeModel.js, cloudServerModel.js
    cloudServer: {
        total_order_value_must_be_greater_than_or_equal_to_0: "Tổng giá trị đơn hàng của quý khách phải lớn hơn hoặc bằng 0.",
        you_have_not_selected_a_region: "Bạn chưa chọn vùng miền",
        you_have_not_selected_the_ip_type: "Bạn chưa chọn loại IP",
        you_have_not_configured_the_operating_system: "Bạn chưa cấu hình hệ điều hành",
        have_cloud_server_has_not_configured_the_operating_system: "Có {0} Cloud Server chưa được cấu hình hệ điều hành",
        please_configure_your_domain_name: "Bạn vui lòng cấu hình tên miền",
        limit_service: "Hệ thống chưa hỗ trợ mua số lượng > 20",
        payg_allowed_to_register: "Lưu ý: Số lượng gói dịch vụ Pay as you go được phép đăng ký là {0} gói/tháng",
        payg_quantity_must_be_divisible: "Số lượng phải chia hết cho {0}",
        payg_choose_parameter: "Vui lòng chọn thông số {0}",
        payg_pay_overdue_charges_for_VMs: "Bạn có chắc chắn muốn thanh toán cước PayG quá hạn cho các VM này không?"

    },
    caas: {
        total_order_value_must_be_greater_than_or_equal_to_0: "Tổng giá trị đơn hàng của quý khách phải lớn hơn hoặc bằng 0.",
        you_have_not_selected_a_region: "Bạn chưa chọn vùng miền",
        you_have_not_selected_the_ip_type: "Bạn chưa chọn loại IP",
        you_have_not_configured_the_operating_system: "Bạn chưa cấu hình hệ điều hành",
        have_cloud_server_has_not_configured_the_operating_system: "Dịch vụ chưa được chọn phiên bản Kubernetes ",
        please_configure_your_domain_name: "Bạn vui lòng cấu hình tên miền",
        limit_service: "Hệ thống chưa hỗ trợ mua số lượng > 20"
    },
    startCloud: {
        total_order_value_must_be_greater_than_or_equal_to_0: "Tổng giá trị đơn hàng của quý khách phải lớn hơn hoặc bằng 0.",
        you_have_not_selected_a_region: "Bạn chưa chọn vùng miền",
        you_have_not_selected_the_ip_type: "Bạn chưa chọn loại IP",
        you_have_not_configured_the_operating_system: "Bạn chưa cấu hình hệ điều hành",
        have_start_cloud_has_not_configured_the_operating_system: "Có {0} Start Cloud chưa được cấu hình hệ điều hành",
        please_configure_your_domain_name: "Bạn vui lòng cấu hình tên miền",
        limit_service: "Hệ thống chưa hỗ trợ mua số lượng > 20",
        must_more_than_three_month_or_one_million: "Vui lòng mua gói có phí duy trì hàng tháng hơn 1.000.000 đ hoặc số tháng đăng ký lớn hơn 3 tháng"
    },

    //Scripts/js/ServiceChangePassword-Index.js
    serviceChangePassword: {
        change_password_failed: "Đổi mật khẩu không thành công",
        change_password_successfully: "Thay đổi mật khẩu thành công",
    },
    //Scripts/js/cloudserver-snapshot.js
    cloudServerSnapshot: {
        are_you_sure_you_want_to_delete_this_snapshot: "Bạn có chắc chắn muốn xóa bản Snapshot này?",
        creating_snapshots_can_affect_the_processes_running_on_the_server: "Việc tạo Snapshot có thể ảnh hưởng đến các tiến trình đang hoạt động trên máy chủ!",
        restoring_from_a_snapshot_can_affect_your_current_data_on_the_server: "Việc khôi phục từ Snapshot có thể ảnh hưởng đến dữ liệu hiện tại của bạn trên máy chủ!",
        recovering_from_snapshot: "Đang Khôi phục từ Snapshot!",
        creating_a_snapshot: "Đang tạo Snapshot!",
        deleting_snapshot: "Đang xóa Snapshot!"
    },
    //Scripts/js/topup-index.js
    topup: {
        please_enter_amount: "Vui lòng nhập Số tiền.",
        the_amount_must_be_an_integer_greater_than_or_equal_to_zero: "Số tiền phải là một số nguyên lớn hơn hoặc bằng 0.",
        amount_not_more_than_9_digits: "Số tiền không được nhiểu hơn 9 chữ số",
        please_check_the_information: "Vui lòng kiểm tra thông tin"
    },
    //Scripts/js/shopping-cart.js
    shoppingCart: {
        are_you_sure_you_want_to_delete: "Bạn có chắc chắn muốn xóa?",
        are_you_sure_you_want_to_delete_content: "Xóa rồi sẽ phải thêm lại gói vào giỏ từ đầu.",
    },
    //Scripts/js/serviceInit-Index.js, vm-chart.js
    serviceInit: {
        are_you_sure_you_want_to_enable_the_server: "Bạn có chắc chắn muốn bật máy chủ?",
        turning_on: "Đang bật máy!",
        shutdowning: "Đang tắt máy!",
        rebooting: "Đang khởi động lại máy!",
        changing_information: "Đang thay đổi thông tin Vm",
        error_changing_information: "Lỗi thay đổi thông tin Vm",
        the_server_will_be_restarted_in_the_process_of_changing_the_server_information: "Bạn có chắc chắn muốn thay đổi thông tin máy chủ?",
        this_may_affect_the_processes_running_on_the_server: "Việc này có thể ảnh hưởng đến các tiến trình đang hoạt động trên máy chủ!",
        backup_restore_warning: "Bạn có chắc chắn muốn khôi phục lại dữ liệu ({0})?\nLưu ý: những dữ liệu hiện tại của khách hàng sẽ bị mất nếu bạn khôi phục lại bảng dữ liệu trong quá khứ",
        backup_change_time_warning: "Bạn chỉ được đặt thời điểm backup từ {0} đến {1}",
        vm_performance_history: "Chưa có dữ liệu hiệu năng sử dụng VM.",
        button_removeNode: "Đang xóa node!",
    }, ssl: {
        limit_service: "Hệ thống chưa hỗ trợ mua số lượng > 25"
    },
    endpointSecurity: {
        deleteReport: "Xóa báo cáo",
        deleteReportSure: "Bạn có chắc chắn muốn xóa báo cáo ",
        cancel: "Hủy bỏ",
        accept: "Đồng ý",
        errorMsg: "Đã có lỗi xảy ra: ",
        noReportData: "Báo cáo chưa có dữ liệu",
        requireReportName: "Tiêu đề báo cáo không được bỏ trống",
        requireReportType: "Yêu cầu chọn loại báo cáo",
        deletePackage: "Xóa package",
        deletePackageSure: "Bạn có chắc chắn muốn xóa package ",
        deleteAccount: "Xóa tài khoản",
        deleteAccountSure: "Bạn có chắc chắn muốn xóa tài khoản ",
        requirePackageName: "Tên package không được bỏ trống",
        requireAccountFullName: "Họ tên không được bỏ trống",
        requireAccountEmail: "Email không được bỏ trống",
        invalidEmail: "Email không hợp lệ",
    }
};

resourceConstants.validation = {
    //Scripts/js/ServiceChangePassword-Index.js
    serviceChangePassword: {
        new_password_required: "Mật khẩu mới không được trống!",
        new_password_regex_pass: "Mật khẩu phải bao gồm ký tự in hoa, ký tự số và ký tự đặc biệt (!@#$&*)",
        new_password_min_length: "Mật khẩu tối thiểu 8 ký tự!",
        new_password_max_length: "Mật khẩu tối đa 50 ký tự!",
        confirm_new_password_required: "Xác nhận mật khẩu mới không được trống!",
        confirm_new_password_regex_pass: "Mật khẩu phải bao gồm ký tự in hoa, ký tự số và ký tự đặc biệt (!@#$&*)",
        confirm_new_password_confirm_pwd: "Mật khẩu xác nhận không khớp!",
        confirm_new_password_min_length: "Mật khẩu tối thiểu 8 ký tự!",
        confirm_new_password_max_length: "Mật khẩu tối đa 50 ký tự!"
    },
    //Scripts/js/serviceInit-Index.js
    serviceInit: {
        machine_name_required: "Tên máy chủ không được trống!",
        machine_name_max_length: "Tên máy chủ không được vượt quá 15 ký tự!",
        machine_name_regex: "Tên máy chủ MachineName không được chứa ký tự đặc biệt (~!@#$%^&*().,_)",
        required: "{0} không được trống!",
        max_length: "{0} không được vượt quá {1} ký tự!",
        regex: "{0} không được chứa ký tự đặc biệt (~!@#$%^&*().,)",
    }
};